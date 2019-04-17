<template>

    <div>
        <b-field
                label="Nombre"
                :type="errors.name?'is-danger':''"
                :message="errors.name">
            <b-input
                    v-model="data.name"
                    placeholder="Nombre Completo"
                    type="text">
            </b-input>

        </b-field>
        <b-field
                label="Correo"
                :type="errors.email?'is-danger':''"
                :message="errors.email">
            <b-input
                    v-model="data.email"
                    placeholder="correo@dominio.com"
                    type="email">
            </b-input>

        </b-field>
        <b-field
                label="Contraseña"
                :type="errors.password?'is-danger':''"
                :message="errors.password">
            <b-input
                    v-model="data.password"
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
                    v-model="data.password_confirmation"
                    placeholder="**********"
                    type="password"
                    password-reveal>
            </b-input>


        </b-field>
        <b-field v-if="data.avatar">
            <figure class="image is-128x128">
                <img :src="data.avatar" alt="Avatar">
            </figure>
            <a class="delete" @click="data.avatar = null"></a>
        </b-field>
        <b-field class="file" v-else>

            <b-upload v-model="data.image" accept="image/*">
                <a class="button is-primary">
                    <b-icon icon="upload"></b-icon>
                    <span>Click para subir</span>
                </a>
            </b-upload>
            <span class="file-name" v-if="data.image">
            {{ data.image.name }}
        </span>
        </b-field>
        <input-date v-model="data.birthday" :error="errors.birthday"></input-date>
    </div>
</template>

<script>
    import InputDate from "../InputDate";
    export default {
        name: "FormUser",
        components: {InputDate},
        data() {
            return {
                file: null,
            }
        },
        props: {
            data: Object,
            errors: Object
        }
    }
</script>

<style scoped>

</style>