<script setup>
import { ref } from 'vue';

const cursos = ref(['141GA', '142GA', '141AA', '142AA']);

const nuevoCurso = ref();

// Funciones. Cuidado, hay que poner value
const agregarCurso = () => {
    cursos.value.push(nuevoCurso.value.toUpperCase());
    nuevoCurso.value = '';
}
</script>

<template>
    <h1>Ejemplo v-on</h1>
    <hr class="mb-5">

    <h2>Cursos</h2>
    <ul class="list-group col-3">
        <li class="list-group-item d-flex justify-content-between align-items-center"
            v-for="(curso, index) of cursos" :key="index">
            <span>{{ curso }}</span>
            <span class="badge text-bg-primary rounded-pill">{{ index }}</span>
        </li>
    </ul>

    <h2 class="mt-5">Nuevo curso</h2>
    <div class="card col-4 p-3">
        <div class="mb-3">
            <label class="form-label" for="nuevoCurso">Nombre</label>
            <!-- Al pulsar la tecla enter se ejecuta la función. -->
            <input class="form-control" placeholder="Escribe algo..." id="nuevoCurso" type="text"
                   v-model="nuevoCurso" @keyup.enter="agregarCurso()"/>
        </div>
        <div>
            <!-- Solo se muestra el botón si hay algo en la caja de texto -->
            <button class="btn btn-primary" v-show="nuevoCurso" v-on:click="agregarCurso()">Agregar</button>
            <!-- v-on:click="agregarCurso" y @click es lo mismo. -->
        </div>
    </div>
</template>

<style scoped>
</style>
