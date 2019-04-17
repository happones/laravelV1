<template>
    <auth-layout>
        <div class="columns">
            <div class="column is-6 is-offset-3 is-4-widescreen is-offset-4-widescreen">
                <div class="box">
                    <form @submit.prevent="onRegister">
                        <b-field
                                label="Nombre"
                                :type="errors.name?'is-danger':''"
                                :message="errors.name">
                            <b-input
                                    v-model="user.name"
                                    placeholder="Nombre Completo"
                                    type="text">
                            </b-input>

                        </b-field>
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

                        <b-field
                                label="Confirmar contraseña"
                                :type="errors.password_confirmation?'is-danger':''"
                                :message="errors.password_confirmation">
                            <b-input
                                    v-model="user.password_confirmation"
                                    placeholder="**********"
                                    type="password"
                                    password-reveal>
                            </b-input>

                        </b-field>
                        <div class="field">
                            <p class="control">
                                <button class="button is-primary" type="submit">
                                    Registrarme
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
        name: "Register",
        components: {AuthLayout},
        data() {
            return {
                user: {},
                errors: {}
            }
        },
        methods: {
            onRegister() {
                this.$loader.show();
                this.errors = {};
                this.$auth.register({
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