<script setup>
import { computed, ref } from 'vue';
import { usePostStore } from '@/stores/PostStore'

const store = usePostStore();

const titulo = ref('');
const contenido = ref('');

const completado = computed(() => {
    return titulo.value.length > 0 && contenido.value.length > 0;
});

const guardar = () => {
    const nuevoPost = {
        userId: 1,
        id: store.siguienteId,
        title: titulo.value,
        body: contenido.value
    }
    store.agregar(nuevoPost);
    limpiar();
}

const limpiable = computed(() => {
    return titulo.value.length > 0 || contenido.value.length > 0;
});

function limpiar() {
    titulo.value = '';
    contenido.value = '';
}
</script>

<template>
    <h2>Nuevo post</h2>
    <div class="card">
        <div class="card-body">
            <div class="mb-3">
                <label class="form-label" for="titulo">Título</label>
                <input class="form-control" id="titulo" type="text" placeholder="Escribe algo..."
                       v-model="titulo"/>
            </div>
            <div class="mb-3">
                <label class="form-label" for="contenido">Contenido</label>
                <input class="form-control" id="contenido" type="text" placeholder="Escribe algo..."
                       v-model="contenido"/>
            </div>
            <button class="btn btn-primary" :disabled="!completado" @click='guardar()'>Guardar</button>
            <button class="btn btn-link link-dark" :disabled="!limpiable" @click="limpiar()">Cancelar</button>
        </div>
    </div>
</template>

<style scoped>
</style>
