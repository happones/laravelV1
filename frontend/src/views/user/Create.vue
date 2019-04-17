<template>
    <form @submit.prevent="storeData">
        <form-user :data="data" :errors="errors"></form-user>
        <hr>
        <div class="field">
            <p class="control">
                <button class="button is-primary" type="submit">
                    Guardar datos
                </button>
            </p>
        </div>
    </form>
</template>

<script>
    import FormUser from "../../components/user/FormUser";
    export default {
        name: "Create",
        components: {FormUser},
        data() {
            return {
                data: {},
                errors: {}
            }
        },
        methods: {
            storeData() {
                this.errors = {};
                this.$loader.show();
                let data = new FormData();
                for (let item in this.data) {
                    data.append(item, this.data[item]);
                }

                this.$http.post('user', data)
                    .then(({data}) => {
                        this.$loader.hide();
                        this.$notify.success(data.message);
                        this.$router.back();
                    }, ({response}) => {
                        this.$loader.hide();
                        let data = response.data;
                        this.errors = data.errors || {};
                        this.$notify.danger(data.message);
                    })
            }
        }
    }
</script>

<style scoped>

</style>