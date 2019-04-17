<template>
    <li :class="{'is-active': active}">
        <a :href="href" v-if="active || to === undefined">
            <b-icon :icon="icon" v-if="icon" size="is-small"></b-icon>
            <span>
                {{ btext }}
            </span>
        </a>
        <router-link :to="to" v-else>
            <b-icon :icon="icon" v-if="icon" size="is-small"></b-icon>
           <span>
                {{ btext }}
           </span>
        </router-link>
    </li>

</template>

<script>
    export default {
        name: "BBreadcrumbItem",
        data() {
            return {
                active: false,
                index: 0,
            }
        },
        props: {
            href: String,
            label: String,
            to: String | Object,
            icon: String,
        },
        computed: {
            btext() {
                if (this.label) {
                    return this.label
                }
                let slots = this.$slots.default || []
                return slots[0].text || ''
            }
        }
    }
</script>

<style scoped>

</style>