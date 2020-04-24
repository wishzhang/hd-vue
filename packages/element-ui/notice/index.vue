<template>
    <div :class="b()">
        <div :class="b('item')"
             :key="index"
             @click="itemClick(item,index,list)"
             v-for="(item,index) in list">
            <div :class="b('img')"
                 v-if="item[imgKey]">
                <img :src="item[imgKey]"
                     alt="">
            </div>
            <div :class="b('content')">
                <div :class="b('title')">
                    <span :class="b('name')">{{item[titleKey]}}</span>
                    <span :class="b('tag')"
                          v-if="item[tagKey]">
            <el-tag size="small"
                    :type="getType(item[statusKey])">{{item[tagKey]}}</el-tag>
          </span>
                </div>
                <div :class="b('subtitle')">{{item[subtitleKey]}}</div>
            </div>
        </div>
        <!--底部-->
        <div v-if="showFooterKey&&list.length!==0">
            <div v-if="!hasLoadAll" :class="b('more')"
                 v-loading="loading"
                 @click="handleClick">
                加载更多
            </div>
            <div v-else :class="b('all')">
                已加载全部
            </div>
        </div>
        <!--空视图-->
        <div v-if="list.length===0">
            <slot name="emptySlot">
                <div :class="b('nothing')">暂无数据</div>
            </slot>
        </div>
    </div>
</template>

<script>
    const propsDefault = {
        img: 'img',
        title: 'title',
        subtile: 'title',
        tag: 'tag',
        status: 'status'
    }
    import create from "core/create";

    export default create({
        name: 'notice',
        props: {
            option: {
                type: Object,
                default: () => {
                    return {}
                }
            },
            data: {
                type: Array,
                default: () => {
                    return []
                }
            }
        },
        data() {
            return {
                page: 1,
                loading: false,
            }
        },
        computed: {
            showFooterKey() {
                return this.option.showFooter || true;
            },
            props() {
                return this.option.props || propsDefault;
            },
            imgKey() {
                return this.props.img || propsDefault.img
            },
            titleKey() {
                return this.props.title || propsDefault.title
            },
            subtitleKey() {
                return this.props.subtitle || propsDefault.subtitle
            },
            tagKey() {
                return this.props.tag || propsDefault.tag
            },
            statusKey() {
                return this.props.status || propsDefault.status
            },
            total() {
                if (!this.option.total || this.option.total < 0) {
                    return 0;
                }
                return this.option.total;
            },
            list() {
                return this.data.slice(0, this.total);
            },
            hasLoadAll() {
                return this.total <= this.list.length;
            }
        },
        methods: {
            itemClick(item, index, list) {
                this.$emit('item-click', item, index, list);
            },
            handleClick() {
                this.loading = true;
                const done = () => {
                    this.loading = false;
                }
                this.page++;
                this.$emit('page-change', this.page, done)
            },
            getType(status = 0) {
                if (status == 0) {
                    return 'info'
                } else if (status == 1) {
                    return ''
                } else if (status == 2) {
                    return 'warning'
                } else if (status == 3) {
                    return 'danger'
                } else if (status == 4) {
                    return 'success'
                }
            }
        }
    })
</script>
