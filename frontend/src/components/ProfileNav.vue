<template>
    <b-dropdown
            position="is-bottom-left"
            aria-role="menu">
        <a
                class="navbar-item"
                slot="trigger"
                role="button">
            <figure>
                <img :src="user.avatar" :alt="`Avatar ${user.name}`">
            </figure>
            <span>{{ user.name }}</span>
            <b-icon icon="caret-down"></b-icon>
        </a>

        <b-dropdown-item custom aria-role="menuitem">
            <b>{{ user.email }}</b>
        </b-dropdown-item>
        <hr class="dropdown-divider">
        <b-dropdown-item has-link aria-role="menuitem">
            <a @click="onLogout">
                <b-icon icon="sign-out-alt"></b-icon>
               Cerrar sesión
            </a>
        </b-dropdown-item>
    </b-dropdown>
</template>

<script>
    export default {
        name: "ProfileNav",
        data() {
            return {
                user: {}
            }
        },
        created() {
            this.user = this.$auth.user() || {};
        },
        methods: {
            onLogout() {
                this.$auth.logout();
            }
        }
    }
</script>

<style scoped>

</style>