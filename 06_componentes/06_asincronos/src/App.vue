<script setup>
import { defineAsyncComponent, ref } from 'vue';

const HijoAsync = defineAsyncComponent(() => import ('@/components/HijoAsync.vue'));

const activo = ref(false);

// https://vuejs.org/guide/components/async.html
</script>

<template>
    <h1>Ejemplo de componentes asíncronos</h1>
    <nav class="navbar navbar-expand bg-body-secondary mb-5">
        <div class="navbar-nav px-3">
            <button class="nav-link link-primary" @click="activo = !activo">Cargar componente hijo</button>
        </div>
    </nav>
    <main>
        <HijoAsync v-if="activo"/>
    </main>
</template>

<style scoped>
</style>
