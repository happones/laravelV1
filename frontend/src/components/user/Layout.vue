<template>
    <div>
        <b-breadcrumb>
            <b-breadcrumb-item :to="{ name: 'home' }">Inicio</b-breadcrumb-item>
            <b-breadcrumb-item :to="{ name: 'user' }">Usuarios</b-breadcrumb-item>
            <b-breadcrumb-item v-if="$route.name !== 'user'">{{ $route.meta.title }}</b-breadcrumb-item>
        </b-breadcrumb>
        <router-view></router-view>
    </div>
</template>

<script>
    import BBreadcrumb from "../bulma/BBreadcrumb";
    import BBreadcrumbItem from "../bulma/BBreadcrumbItem";
    export default {
        name: "Layout",
        components: {BBreadcrumbItem, BBreadcrumb}
    }
</script>

<style scoped>

</style>