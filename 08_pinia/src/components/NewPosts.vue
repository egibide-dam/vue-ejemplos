<script setup>
import { ref } from 'vue';
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
}
</script>

<template>
    <div class="card">
        <div class="card-title">
            <label for="titulo">
                Título
                <input v-model='titulo' type="text" placeholder="Soy un titulo">
            </label>
        </div>
        <div class="card-content">
            <label for="contenido">
                Contenido:
                <textarea v-model='contenido' type="text" placeholder="Soy un contenido"/>
            </label>
        </div>
        <button @click='armarObjeto()' class="button">Agregar</button>
    </div>
</template>

<style scoped>
</style>
