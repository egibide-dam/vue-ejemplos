<script setup>
import { reactive } from 'vue'

import MostrarTareas from "@/components/MostrarTareas.vue";
import AgregarTareas from '@/components/AgregarTareas.vue'

const listaTareas = reactive([
    {
        id: 1,
        tarea: 'Ir al supermercado'
    },
    {
        id: 2,
        tarea: 'Bañar al perro'
    }
])

const agregarTarea = (nuevaTarea) => {
    listaTareas.push({
        id: listaTareas.length + 1,
        tarea: nuevaTarea
    })
}
</script>

<template>
    <h1>Ejemplo props</h1>
    <hr class="mb-5">

    <MostrarTareas :tareas="listaTareas" titulo="Tareas actuales"/>
    <AgregarTareas @agregar="agregarTarea"/>
</template>

<style scoped>
</style>
