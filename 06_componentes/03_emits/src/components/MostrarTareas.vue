<script setup>
defineProps({
    tareas: Array,
    titulo: String
})
</script>

<template>
    <h2>{{ titulo }}</h2>
    <ul class="list-group col-3">
        <li class="list-group-item d-flex align-items-center"
            v-for="tarea of tareas" :key="tarea.id">
            <span class="badge text-bg-secondary me-3">#{{ tarea.id }}</span>
            <span>{{ tarea.texto }}</span>
        </li>
    </ul>
</template>

<style scoped>
</style>
