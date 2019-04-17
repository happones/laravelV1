<template>
    <form @submit.prevent="updateData">
        <content-placeholders v-if="isLoading">
            <content-placeholders-heading />
            <content-placeholders-text :lines="3" />
        </content-placeholders>

        <form-user :data="data" :errors="errors" v-else></form-user>
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
        name: "Edit",
        components: {FormUser},
        data() {
            return {
                data: {},
                errors: {},
                isLoading: true
            }
        },
        props: {
            id: String|Number
        },
        watch: {
            '$router': 'getData'
        },
        created() {
            this.prepareComponent()
        },
        methods: {
            prepareComponent() {
                this.getData()
            },
            getData() {
                this.isLoading = true;
                this.$http.get(`user/${this.id}`)
                    .then(({data}) => {
                        this.isLoading = false;
                        this.data = data;
                    }, ({response}) => {
                        this.isLoading = false;
                        this.$router.replace({name: 'user'});
                    })
            },
            updateData() {
                this.errors = {};
                this.$loader.show();
                let data = new FormData();
                for (let item in this.data) {
                    data.append(item, this.data[item]);
                }
                data.append('_method', 'put');
                this.$http.post(`user/${this.id}`, data)
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