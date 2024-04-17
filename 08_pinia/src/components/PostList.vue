<script setup>
import PostCard from '@/components/PostCard.vue';
import { usePostStore } from '@/stores/PostStore';

const store = usePostStore();
</script>

<template>
    <h2>Posts</h2>
    <PostCard class="mb-3" v-for="post in store.posts" :key="post.id" :titulo="post.title" :contenido="post.body"/>
    <p class="text-secondary">Total: {{ store.numPosts }}</p>
</template>

<style scoped>
</style>
