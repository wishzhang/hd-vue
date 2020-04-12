<template>
    <div
            @contextmenu.prevent=""
            @mousewheel="mouseWheel"
            id="avue-epub"
            @click="dialogClick"
            :class="b()"
            v-if="dialogVisible">
        <div :class="b('book')">
            <div v-show="canShow" :class="b('book__header')">
                <div :class="b('book__header__title')" :title="bookName" v-text="bookName"></div>
                <div :class="b('book__header__section')" :title="currentSectionName" v-text="currentSectionName"></div>
                <div :class="b('book__header__page')" v-text="progressStr"></div>
            </div>
            <!--书本内容-->
            <div id="epub__book__viewer__box" :class="b('book__content')">
                <div id="epub__book__viewer"></div>
            </div>
            <!--目录-->
            <div
                    v-show="canShow"
                    @mousewheel.stop=""
                    v-if="catalogueVisible"
                    :class="b('book__catalogue')">
                <div :class="b('book__catalogue__layer')"></div>
                <div @mousedown="isCatalogueClick=true"
                     @mouseup="isCatalogueClick=true"
                     :class="b('book__catalogue__box')">
                    <div :class="b('book__catalogue__box__header')" :title="bookName">{{bookName}}</div>
                    <el-scrollbar
                            @mousedown.native.capture="isCatalogueClick=true"
                            @mouseup.native.capture="isCatalogueClick=true"
                            :wrap-style="'overflow-x:hidden;'"
                            style="height:calc(100% - 121px);background-color: rgb(230, 230, 230);">
                        <div :class="b('book__catalogue__box__content')">
                            <div
                                    :key="i"
                                    v-for="(section,i) in catalogue"
                                    :class="b('book__catalogue__box__content__section')">
                                <div @click.stop="catalogueClick(section.href)"
                                     :class="b('book__catalogue__box__content__section__title')">
                                    <span class="name">{{section.label}}</span>
                                    <span class="page">{{section.page}}</span>
                                </div>
                                <div
                                        @click.stop="catalogueClick(section.href)"
                                        v-for="(chapter,j) in section.subitems"
                                        :class="b('book__catalogue__box__content__section__chapter')">
                                    <span class="name">{{chapter.label}}</span>
                                    <span class="page">{{chapter.page}}</span>
                                </div>
                            </div>
                        </div>
                    </el-scrollbar>
                </div>
            </div>
            <!--定位-->
            <div v-show="canShow" :class="b('book__box1')">
                <div @click.stop="catalogueVisible=!catalogueVisible" :class="b('book__box1__button')"
                     style="background-color: #257AA7;">
                    <i class="el-icon-notebook-1"></i><em>目录</em>
                </div>
                <!--                <div :class="[b('book__box1__button'),b('book__box1__button&#45;&#45;90')]"-->
                <!--                     style="background-color: #65992C;">-->
                <!--                    <i class="el-icon-document"></i><em>详情页</em>-->
                <!--                </div>-->
                <!--                <div :class="b('book__box1__button')" style="background-color: #DF802C;">-->
                <!--                    <i class="el-icon-download"></i><em>下载</em>-->
                <!--                </div>-->
            </div>
            <!--翻页-->
            <div v-show="canShow" :class="b('book__box2')">
                <div @click="prevClick" title="上一页" :class="b('book__box2__prev')">
                    <i class="el-icon-arrow-left"></i>
                </div>
                <div @click="nextClick" title="下一页" :class="b('book__box2__next')">
                    <i class="el-icon-arrow-right"></i>
                </div>
            </div>
            <div v-show="canShow" :class="b('book__box3')"></div>
        </div>
        <i :class="['el-icon-close',b('close')]" @click.stop="close"></i>

        <!--书籍的滚动条-->
        <div v-show="canShow" id="book-scrollbar" :class="b('scrollbar')">
            <el-slider
                    :format-tooltip="formatTooltip"
                    :show-tooltip="true"
                    @change="sliderChange"
                    v-model="sliderValue"
                    vertical
                    :min="min"
                    :max="max"
                    :height="scrollHeight">
            </el-slider>
        </div>
    </div>
</template>

<script>
    // TODO:1 精确分页
    // TODO:BUG:1 页面往前有时候页面显示不对，可能是epub.js的滚动监听处理有问题
    import create from "core/create";

    export default create({
        name: "epub",
        props: {
            bookUrl: {
                type: String,
                default: '',
                required: true
            }
        },
        data() {
            return {
                loading: false,
                // 滚动条高度
                scrollHeight: '0px',
                // 滚动按钮当前值
                sliderValue: 0,
                // 书名
                bookName: '',
                // 实例
                book: {},
                rendition: {},
                // 显示该页面窗口
                dialogVisible: true,
                // 显示书籍目录
                catalogueVisible: false,
                // 书籍目录数据
                catalogue: [],
                // 是在目录上的点击
                isCatalogueClick: false,
                // 这两个用于页码pageNumber的计算，
                // 可通过locations[pageIndex]取页数对象location
                pageIndex: 0,
                currentLocationIndex: 0,
                // 存放分页信息
                locations: [],
                // fixed
                fixIsByButton: false,
                fixLocationIndex: 1,
                // 当前的章节名称
                currentSectionName: ''
            }
        },
        computed: {
            canShow() {
                return !this.loading;
            },
            pageNumber() {
                if (this.fixIsByButton) {
                    return this.pageIndex + 1;
                } else {
                    return this.fixLocationIndex + 1;
                }
            },
            total() {
                if (this.book && this.book && this.book.locations && this.book.locations.total) {
                    return this.book.locations.total - 1;
                }
                return 0;
            },
            progressStr() {
                return `${this.pageNumber} / ${this.total}`;
            },
            min() {
                return 1;
            },
            max() {
                return this.total;
            }
        },
        methods: {
            // 滚动条的浮动提示
            formatTooltip(val) {
                return (this.max - val) + 1;
            },
            // 跳转到上一页
            prevClick() {
                this.pageIndex = this.fixLocationIndex;
                this.fixIsByButton = true;
                if (this.pageIndex > 0) {
                    this.pageIndex--;
                    this.fixLocationIndex = this.pageIndex;
                    this.rendition.display(this.locations[this.pageIndex]);
                }
            },
            // 跳转到下一页
            nextClick() {
                this.pageIndex = this.fixLocationIndex;
                this.fixIsByButton = true;
                if (this.pageIndex < this.total - 1) {
                    this.pageIndex++;
                    this.fixLocationIndex = this.pageIndex;
                    this.rendition.display(this.locations[this.pageIndex]);
                }
            },
            close() {
                this.dialogVisible = false;
                this.$emit('close');
            },
            // fixed 目录外地方点击可关闭
            dialogClick() {
                this.catalogueVisible = this.isCatalogueClick ? true : false;
                this.isCatalogueClick = false;
            },
            catalogueClick(href) {
                this.rendition.display(href);
                this.catalogueVisible = false;
                this.isCatalogueClick = false;
            },
            // 拖动滚动条后书籍跳转到对应页
            sliderChange(num) {
                this.currentLocationIndex = this.max - num;
                this.rendition.display(this.locations[this.currentLocationIndex]);
            },
            // 监听全局的鼠标滚动，使书本内容滚动
            mouseWheel(e) {
                const els = document.getElementsByClassName('epub-container');
                if (els && els.length > 0) {
                    const el = els[0];
                    el.scrollTop = el.scrollTop + e.deltaY;
                }
            },
        },
        watch: {
            // 监听滚动页码，使对应的滚动按钮到相应的位置
            pageNumber(val) {
                this.$nextTick(() => {
                    this.sliderValue = this.max - val + 1;
                })
            },
            max(val) {
                this.sliderValue = val;
            }
        },
        mounted() {
            if (!window.ePub) {
                console.error('lack of jszip.js and epub.js !');
                return;
            }
            // 加载显示
            this.loading = true;
            const loading = this.$loading({
                lock: true,
                text: '正在加载中',
                spinner: 'el-icon-loading',
                background: '#44454a'
            });

            const book = window.ePub(this.bookUrl) || {};

            const el = document.getElementById('epub__book__viewer');
            const height = el.clientHeight;
            const width = el.clientWidth;
            const rendition = book.renderTo("epub__book__viewer", {
                manager: "continuous",
                spread: '0',
                flow: "scrolled",
                width: width,
                height: height,
                store: 'true'
            }) || {};

            rendition.display(this.pageIndex).then(() => {
            })

            // 设置右边滚动条的高度，-25是为了让滚动按钮不超出页面显示范围
            this.scrollHeight = (document.getElementById('book-scrollbar').scrollHeight - 25) + 'px';

            // 书本初始化完成
            book.ready
                .then(([manifest, spine, metadata, cover, navigation, resources, displayOptions]) => {
                    // 设置目录
                    this.catalogue = navigation.toc;

                    // 设置书名
                    this.bookName = metadata.title;

                    // 预分页，根据字符个数把书籍分页
                    const el = document.getElementById('epub__book__viewer');
                    const num = Number.parseInt(Number.parseInt(el.clientWidth, 10)
                        * Number.parseInt(el.clientHeight) / (400 * 2), 10);
                    return book.locations.generate(num);
                })
                .then((locations) => {
                    loading.close();
                    this.loading = false;
                    // 保存分页信息
                    this.locations = locations;
                })
                .catch(() => {
                    this.loading = false;
                    loading.close();
                })

            /**
             * 监听书本内容位置改变
             */
            rendition.on("relocated", (location) => {
                if (!this.fixIsByButton && location.start.location <= this.total - 1) {
                    this.fixLocationIndex = location.start.location;
                } else {
                    this.fixIsByButton = false;
                }
            });

            /**
             * 设置主题样式
             */
            rendition.themes.default({
                a: {
                    'color': '#222222 !important',
                    'line-height': '1.6 !important',
                    'text-decoration': 'none'
                },
                'a:hover': {
                    'color': '#3380ff !important',
                },
                body: {
                    'background': '#f5f5f5',
                    'padding': '0 40px !important'
                },
                h2: {
                    'font-size': '32px',
                    'color': 'purple'
                },
                p: {
                    'font-size': '19px !important',
                    'font-family': 'Microsoft Yahei !important',
                    'color': '#222222 !important',
                    'line-height': '1.6 !important'
                }
            });

            // 监听当前位置，设置当前章节标题
            rendition.on("rendered", (section) => {
                const prevSection = section.prev();
                let current = book.navigation.toc.find((item) => {
                    return item.href.includes(section.href);
                })

                if (!current && prevSection) {
                    current = book.navigation.toc.find((item) => {
                        return item.href.includes(prevSection.href);
                    })
                }

                if (current) {
                    this.currentSectionName = current.label.trim();
                }
            });

            this.book = book;
            this.rendition = rendition;
        },
        destroyed() {
            if (this.book) {
                this.book.destroy();
            }
        }
    })
</script>
