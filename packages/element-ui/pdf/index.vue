<template>
    <div
            @contextmenu.prevent=""
            :class="b()"
            v-if="dialogVisible">
        <div :class="b('book')">
            <!--书本内容-->
            <div :class="b('book__content')">
                aa
                <pdf :src="'./hello.pdf'"></pdf>
            </div>
            <!--翻页-->
            <div v-show="true" :class="b('book__box2')">
                <div @click="prevClick" title="上一页" :class="b('book__box2__prev')">
                    <i class="el-icon-arrow-left"></i>
                </div>
                <div @click="nextClick" title="下一页" :class="b('book__box2__next')">
                    <i class="el-icon-arrow-right"></i>
                </div>
            </div>

        </div>
        <i :class="['el-icon-close',b('close')]" @click.stop="close"></i>
    </div>
</template>

<script>
    // TODO:1 精确分页
    // TODO:BUG:1 页面往前有时候页面显示不对，可能是epub.js的滚动监听处理有问题
    import create from "core/create";
    import pdf from 'vue-pdf';

    export default create({
        name: "pdf",
        components:{
            pdf
        },
        props: {
            bookUrl: {
                type: String,
                default: '',
                required: true
            }
        },
        data() {
            return {
                // 实例
                book: {},
                dialogVisible: true
            }
        },
        computed: {
        },
        methods: {
            // 滚动条的浮动提示
            formatTooltip(val) {
            },
            // 跳转到上一页
            prevClick() {

            },
            // 跳转到下一页
            nextClick() {

            },
            close() {
                this.dialogVisible = false;
                this.$emit('close');
            },
            // 拖动滚动条后书籍跳转到对应页
            sliderChange(num) {

            },
            // 监听全局的鼠标滚动，使书本内容滚动
            mouseWheel(e) {
            },
        },
        watch: {
        },
        mounted() {
        },
        destroyed() {

        }
    })
</script>
