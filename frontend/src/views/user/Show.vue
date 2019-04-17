<template>
    <div class="box">
        <content-placeholders v-if="isLoading">
            <content-placeholders-heading />
            <content-placeholders-text :lines="3" />
        </content-placeholders>
        <article class="media" v-else>
            <div class="media-left">
                <figure class="image is-64x64">
                    <img :src="data.avatar" :alt="`Avatar ${data.name}`">
                </figure>
            </div>
            <div class="media-content">
                <div class="content">
                    <p>
                        <strong>{{ data.name }}</strong> <small>{{ data.email }}</small> <small>{{ data.age }} años</small>
                        <br>
                        {{ data.birthday }}
                    </p>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
    export default {
        name: "Show",
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
        }
    }
</script>

<style scoped>

</style>