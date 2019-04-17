<template>
    <div class="step-item" :class="complete + ' ' + currentStatus">
        <div class="step-marker">
            <template v-if="simple !== '' || currentStatus === 'is-completed'">
                <b-icon :icon="icon" :pack="iconPack"></b-icon>
            </template>
            <template v-else>
                {{ stepNumber }}
            </template>
        </div>
        <div class="step-details">
            <p class="step-title is-size-6-mobile is-size-5-tablet">{{ title }}</p>
            <p class="is-hidden-mobile is-size-6-tablet">{{ content }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "b-step",
        data() {
            return  {
                stepNumber: '',
                nextError: false,
                total: 1,
                currentStatus: '',
                complete: ''
            }
        },
        props: {
            colorComplete: {
                type: String,
                color: 'is-primary'
            },
            title: String,
            content: String,
            simple: String,
            iconPack: String,
            icon: {
                default: 'flag',
                type: String
            },
            iconComplete: {
                default: 'check',
                type: String
            }
        },
        computed: {
            child() {
                console.log(this.$attrs)
                return 1
            }
        }
    }
</script>

<style scoped>

</style>
