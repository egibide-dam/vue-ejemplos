<script setup>
// Importa el store
import { usePostsStore } from '@/stores/PostsStore';
import PostCard from '@/components/PostCard.vue';

// Dentro de este componente lo que se coge del almacén se llama postsStore
const postsStore = usePostsStore();
</script>

<template>
    <h2>Posts</h2>
    <PostCard class="mb-3" v-for="post in postsStore.posts" :key="post.id" :titulo="post.title" :contenido="post.body"/>
    <p class="text-secondary">Total: {{ postsStore.calcularCantidad }}</p>
</template>

<style scoped>
</style>
