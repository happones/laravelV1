<template>
  <div class="steps" :class="size">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "b-steps",
        props: {
            size: String,
            current: {
                type: Number,
                default: 0
            },
        },
        methods: {
            updateChildProps (isInit) {
                const total = this.$children.length;
                this.$children.forEach((child, index) => {
                    child.stepNumber = index + 1;
                    if (this.direction === 'horizontal') {
                        child.total = total;
                    }
                    if (!(isInit && child.currentStatus)) {
                        if (index == this.current) {
                            if (this.status != 'error') {
                                child.currentStatus = 'is-active';
                            }
                        } else if (index < this.current) {
                            child.currentStatus = 'is-completed';
                        } else {
                            child.currentStatus = 'wait';
                        }
                    }
                    if (child.currentStatus != 'error' && index != 0) {
                        this.$children[index - 1].nextError = false;
                    }
                });
            },
            setNextError () {
                this.$children.forEach((child, index) => {
                    if (child.currentStatus == 'error' && index != 0) {
                        this.$children[index - 1].nextError = true;
                    }
                });
            },
            updateCurrent (isInit) {
                //
                if (this.current < 0 || this.current >= this.$children.length ) {
                    return;
                }
                if (isInit) {
                    const current_status = this.$children[this.current].currentStatus;
                    if (!current_status) {
                        this.$children[this.current].currentStatus = this.status;
                    }
                } else {
                    this.$children[this.current].currentStatus = this.status;
                }
            },
            debouncedAppendRemove () {
                return debounce(function () {
                    this.updateSteps();
                });
            },
            updateSteps () {
                this.updateChildProps(true);
                this.setNextError();
                this.updateCurrent(true);
            }
        },
        mounted () {
            this.updateSteps();
        },
        watch: {
            current () {
                this.updateChildProps();
            },
            status () {
                this.updateCurrent();
            }
        }
    }
</script>

<style scoped>

</style>
