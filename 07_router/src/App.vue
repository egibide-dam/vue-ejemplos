<script setup>
import Lipsum from "@/components/Lipsum.vue";
</script>

<template>
    <h1>Ejemplo con router</h1>
    <nav class="navbar navbar-expand bg-body-secondary rounded mb-5">
        <div class="navbar-nav px-3">
            <RouterLink class="nav-link link-primary" to="/">Inicio</RouterLink>
            <div class="vr mx-3"/>
            <RouterLink class="nav-link link-primary" to="/about">Acerca de</RouterLink>
        </div>
    </nav>
    <main>
        <RouterView/>
    </main>
    <footer class="small text-secondary mt-5">
        <hr>
        <Lipsum :parrafos="1"/>
    </footer>
</template>

<style scoped>
</style>
