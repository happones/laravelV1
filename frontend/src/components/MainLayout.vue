<template>
    <section class="hero">
        <div class="hero-head">
            <nav class="navbar has-shadow">
                <div class="container">
                    <div class="navbar-brand">
                        <router-link :to="{ name: 'home' }" class="navbar-item">
                            <img src="@/assets/logo.png" alt="Logo">
                        </router-link>
                        <span class="navbar-burger burger" @click="toggle = !toggle" :class="toggle?'is-active':''">
                            <span></span>
                            <span></span>
                            <span></span>
                          </span>
                    </div>
                    <div class="navbar-menu" :class="toggle?'is-active':''">
                        <div class="navbar-end">
                            <router-link :to="{name:'home'}" class="navbar-item">
                                <a>Inicio</a>
                            </router-link>
                            <router-link :to="{name:'user'}" class="navbar-item">
                                <a>CRUD</a>
                            </router-link>
                            <profile-nav></profile-nav>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <div class="hero-body">
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
    </section>
</template>

<script>
    import ProfileNav from "./ProfileNav";
    export default {
        name: "MainLayout",
        components: {ProfileNav},
        data() {
            return {
                toggle: false
            }
        }
    }
</script>

<style scoped>

</style>