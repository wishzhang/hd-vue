<template>
    <div :class="[b()]">
        <div :class="b('wrap')">
            <el-input-number
                    :precision="precision"
                    :step="step"
                    controls-position="right"
                    :style="style"
                    :size="size"
                    :controls="controls"
                    :min="min"
                    :max="max"
                    v-model="startNum"
                    @change="handleStartChange"></el-input-number>
            <span :class="b('separator')">至</span>
            <el-input-number
                    :precision="precision"
                    :step="step"
                    controls-position="right"
                    :style="style"
                    :size="size"
                    :controls="controls"
                    :min="min"
                    :max="max"
                    v-model="endNum"
                    @change="handleEndChange"></el-input-number>
        </div>
    </div>
</template>

<script>
    import create from "core/create";

    export default create({
        name: "numrange",
        model: {
            prop: 'value',
            event: 'change'
        },
        props: {
            step: {
                type: Number,
                default: 1
            },
            precision: {
                type: Number,
                default: 0
            },
            value: {
                type: String,
                default: ''
            },
            size: {
                type: String,
                default: 'small'
            },
            min: {
                type: Number,
                default: Number.MIN_SAFE_INTEGER
            },
            max: {
                type: Number,
                default: Number.MAX_SAFE_INTEGER
            },
            controls: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                startNum: undefined,
                endNum: undefined
            };
        },
        computed: {
            style() {
                let minWidth = '80px';
                let width = '50%';
                return {
                    'width': width,
                    'min-width': minWidth
                }
            }
        },
        methods: {
            handleStartChange(currentValue) {
                this.$nextTick(() => {
                    if (typeof currentValue === 'number' && typeof this.endNum === 'number') {
                        if (currentValue > this.endNum) {
                            this.startNum = this.endNum;
                            this.$emit('change', JSON.stringify([this.endNum, this.endNum]));
                        } else {
                            this.$emit('change', JSON.stringify([currentValue, this.endNum]));
                        }
                    } else {
                        this.$emit('change', JSON.stringify([currentValue, this.endNum]));
                    }
                })

            },
            handleEndChange(currentValue) {
                this.$nextTick(() => {
                    if (typeof currentValue === 'number' && typeof this.startNum === 'number') {
                        if (currentValue < this.startNum) {
                            this.endNum = this.startNum;
                            this.$emit('change', JSON.stringify([this.startNum, this.startNum]));
                        } else {
                            this.$emit('change', JSON.stringify([this.startNum, currentValue]));
                        }
                    } else {
                        this.$emit('change', JSON.stringify([this.startNum, currentValue]));
                    }
                })
            }
        },
        created() {
            this.$emit('change', JSON.stringify([this.startNum, this.endNum]));
        },
        mounted() {
        },
        watch: {
            value(val, oldVal) {
                if (val) {
                    const arr = JSON.parse(val);
                    this.startNum = arr[0] ? arr[0] : undefined;
                    this.endNum = arr[1] ? arr[1] : undefined;
                } else {
                    this.startNum = undefined;
                    this.endNum = undefined;
                }
                if (val !== oldVal) {
                    this.$emit('change', JSON.stringify([this.startNum, this.endNum]));
                }
            }
        }
    });
</script>