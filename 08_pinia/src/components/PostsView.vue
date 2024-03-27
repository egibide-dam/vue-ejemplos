<script setup>
// Importa el store
import { usePostsStore } from '@/stores/PostsStore';
import PostCard from '@/components/PostCard.vue';

// Dentro de este componente lo que se coge del almacén se llama postsStore
const postsStore = usePostsStore();
</script>

<template>
    <PostCard v-for="post in postsStore.posts" :key="post.id" :titulo="post.title" :contenido="post.body"/>
    <p>Total posteos: {{ postsStore.calcularCantidad }}</p>
</template>

<style scoped>
</style>
