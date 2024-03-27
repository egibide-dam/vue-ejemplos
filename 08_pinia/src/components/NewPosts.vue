<script setup>
import { computed, ref } from 'vue';
import { usePostsStore } from '@/stores/PostsStore'

const postsStore = usePostsStore();
const titulo = ref('');
const contenido = ref('');
const armarObjeto = () => {
    const nuevoPost = {
        userId: 1,
        id: postsStore.calcularCantidad + 1,
        title: titulo.value,
        body: contenido.value
    }
    postsStore.agregarPost(nuevoPost);
    titulo.value = '';
    contenido.value = '';
}
const completado = computed(() => {
    return titulo.value.length > 0 && contenido.value.length > 0;
});
</script>

<template>
    <h2>Nuevo post</h2>
    <div class="card">
        <div class="card-body">
            <div class="mb-3">
                <label class="form-label" for="titulo">Título</label>
                <input class="form-control" id="titulo" type="text" placeholder="Escribe algo..." v-model="titulo"/>
            </div>
            <div class="mb-3">
                <label class="form-label" for="contenido">Contenido</label>
                <input class="form-control" id="contenido" type="text" placeholder="Escribe algo..."
                       v-model="contenido"/>
            </div>
            <button class="btn btn-primary" :disabled="!completado" @click='armarObjeto()'>Agregar</button>
        </div>
    </div>
</template>

<style scoped>
</style>
