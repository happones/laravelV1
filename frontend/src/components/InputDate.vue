<template>
    <b-field
            label="Cumpleaños"
            :type="error?'is-danger':''"
            :message="error">
        <b-datepicker :value="date"
                      @input="setDate"
                      inline>
        </b-datepicker>
    </b-field>
</template>

<script>
    import moment from 'moment';
    export default {
        name: "InputDate",
        data() {
            return {
                date: new Date()
            }
        },
        props: {
            value: {},
            error:{}
        },
        created() {
            this.date = new Date(moment(this.value || new Date()).format());
            if (! this.value) {
                this.setDate(new Date())
            }
        },
        methods: {
            setDate(val) {
                this.$emit('input', moment(val).format('Y-M-D'));
            }
        }
    }
</script>

<style scoped>

</style>