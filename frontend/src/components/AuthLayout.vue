<template>
    <section class="hero is-fullheight">
        <div class="hero-head">
            <nav class="navbar has-shadow">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="/">
                            <img src="@/assets/logo.png" alt="Logo">
                        </a>
                        <span class="navbar-burger burger" @click="toggle = !toggle" :class="toggle?'is-active':''">
                            <span></span>
                            <span></span>
                            <span></span>
                          </span>
                    </div>
                    <div class="navbar-menu" :class="toggle?'is-active':''">
                        <div class="navbar-end">
                            <router-link :to="{name:'login'}" class="navbar-item">
                                <a>Iniciar</a>
                            </router-link>
                            <router-link :to="{name:'register'}" class="navbar-item">
                                <a>Registro</a>
                            </router-link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <div class="hero-body">
            <div class="container">
                <slot></slot>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "AuthLayout",
        data() {
            return {
                toggle: false
            }
        }
    }
</script>

<style scoped>

</style>