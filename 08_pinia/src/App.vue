<script setup>
import NewPosts from '@/components/NewPosts.vue';
import PostsView from '@/components/PostsView.vue';
</script>

<template>
    <h1>Ejemplo usando Pinia</h1>
    <hr class="mb-5">

    <h2>Posts</h2>
    <PostsView/>
    <NewPosts/>
</template>

<style scoped>
</style>
