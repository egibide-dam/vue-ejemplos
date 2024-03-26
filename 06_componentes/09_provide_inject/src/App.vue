<script setup>
import { provide, ref } from 'vue';
import HijoComponente from './components/HijoComponente.vue'

const frase = ref('Hola, ¿qué tal?');

// provide(clave, valor)
provide('fraseANieto', frase);
</script>

<template>
    <h1>Ejemplo de provide/inject</h1>
    <div class="card col-4 p-3">
        <div class="mb-3">
            <label class="form-label" for="frase">Frase</label>
            <input class="form-control" id="frase" type="text" placeholder="Escribe algo..." v-model="frase"/>
        </div>
    </div>
    <div class="col-4 mt-5">
        <HijoComponente/>
    </div>
</template>

<style scoped>
</style>
