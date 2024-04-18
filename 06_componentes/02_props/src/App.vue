<script setup>
import { reactive } from 'vue'

import MostrarTareas from "@/components/MostrarTareas.vue";

const listaTareas = reactive([
    {
        id: 1,
        texto: 'Ir al supermercado'
    },
    {
        id: 2,
        texto: 'Bañar al perro'
    }
])
</script>

<template>
    <h1>Ejemplo props</h1>
    <hr class="mb-5">

    <MostrarTareas :tareas="listaTareas" titulo="Tareas actuales"/>
</template>

<style scoped>
</style>
