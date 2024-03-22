<script setup>
import { ref } from 'vue';

const cursos = ref(['141GA', '142GA', '141AA', '142AA']);
</script>

<template>
    <h1>Ejemplo v-for</h1>
    <hr class="mb-5">

    <h2>Cursos</h2>
    <ul class="list-group col-3">
        <li class="list-group-item d-flex justify-content-between align-items-center"
            v-for="(curso, index) of cursos" :key="index">
            <span>{{ curso }}</span>
            <span class="badge text-bg-primary rounded-pill">{{ index }}</span>
        </li>
    </ul>
</template>

<style scoped>
</style>
