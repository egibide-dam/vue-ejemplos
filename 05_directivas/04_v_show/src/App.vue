<script setup>
import { ref } from 'vue'

const edad_if = ref(16);
const edad_show = ref(16);
</script>

<template>
    <h1>Ejemplo v-show</h1>
    <hr class="mb-5">

    <h2>v-if</h2>
    <div class="card col-4 p-3 mb-5">
        <label class="form-label" for="edad_if">Edad</label>
        <input class="form-control" id="edad_if" type="number" min="0" max="120" v-model="edad_if"/>
        <p class="text-danger" v-if="edad_if >= 18">Es mayor de edad.</p>
    </div>

    <h2>v-show</h2>
    <div class="card col-4 p-3">
        <label class="form-label" for="edad_show">Edad</label>
        <input class="form-control" id="edad_show" type="number" min="0" max="120" v-model="edad_show"/>
        <p class="text-danger" v-show="edad_show >= 18">Es mayor de edad.</p>
    </div>
</template>

<style scoped>
</style>
