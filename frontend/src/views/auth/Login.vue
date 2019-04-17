<template>
    <auth-layout>
        <div class="columns">
            <div class="column is-6 is-offset-3 is-4-widescreen is-offset-4-widescreen">
                <div class="box">
                    <form @submit.prevent="onLogin">
                        <b-field
                                label="Correo"
                                :type="errors.email?'is-danger':''"
                                :message="errors.email">
                            <b-input
                                    v-model="user.email"
                                    placeholder="correo@dominio.com"
                                    type="email">
                            </b-input>

                        </b-field>
                        <b-field
                                label="Contraseña"
                                :type="errors.password?'is-danger':''"
                                :message="errors.password">
                            <b-input
                                    v-model="user.password"
                                    placeholder="**********"
                                    type="password"
                                    password-reveal>
                            </b-input>

                        </b-field>
                        <div class="field">
                            <p class="control">
                                <button class="button is-primary" type="submit">
                                    Iniciar
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </auth-layout>
</template>

<script>
    import AuthLayout from "../../components/AuthLayout";
    export default {
        name: "Login",
        components: {AuthLayout},
        data() {
            return {
                user: {},
                errors: {}
            }
        },
        methods: {
            onLogin() {
                this.$loader.show();
                this.errors = {};
                this.$auth.login({
                    data: this.user,
                    success({data}) {
                        this.$loader.hide();
                        this.$notify.success(data.message);
                    },
                    error({response}) {
                        this.$loader.hide();
                        let data = response.data;
                        this.errors = data.errors || {};
                        this.$notify.danger(data.message);
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>