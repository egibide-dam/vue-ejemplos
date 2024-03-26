<script setup>
import { ref } from 'vue';

const emit = defineEmits(['agregar']);

const nombreTarea = ref('');

function botonPulsado() {
    emit('agregar', nombreTarea.value);
    nombreTarea.value = '';
}
</script>

<template>
    <h3 class="mt-5">Nueva tarea</h3>
    <div class="card col-3 p-3">
        <div class="mb-3">
            <label class="form-label" for="nombreTarea">Tarea</label>
            <input class="form-control" placeholder="Escribe algo..." id="nombreTarea" type="text"
                   v-model="nombreTarea"/>
        </div>
        <div>
            <button class="btn btn-primary" :disabled="!nombreTarea" @click="botonPulsado()">Agregar</button>
        </div>
    </div>
</template>

<style scoped>
</style>
