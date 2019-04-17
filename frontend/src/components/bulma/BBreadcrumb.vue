<template>
    <nav class="breadcrumb" aria-label="breadcrumbs" :class="extraClass">
        <ul>
            <slot></slot>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "BBreadcrumb",
        data() {
            return {
                childs: null
            }
        },
        props: {
            separator: String,
            alignment: String,
            size: String,
        },
        mounted() {
            this.updateChild();
            this.childs = this.$children;
        },
        computed: {
            extraClass() {
                return `${this.separator || ''} ${this.alignment || ''} ${this.size || ''}`;
            }
        },
        watch: {
            'childs': 'updateChild'
        },
        methods: {
            updateChild() {
                let length = this.$children.length;
                if (length) {
                    this.$children.forEach(el => {
                        el.active = false;
                    });
                    this.$children[length - 1].active = true;
                }

            }
        }
    }
</script>

<style scoped>

</style>