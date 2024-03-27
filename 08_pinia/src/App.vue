<script setup>
import PostsView from '@/components/PostsView.vue';
import NewPosts from '@/components/NewPosts.vue';
</script>

<template>
    <h1>Ejemplo usando Pinia</h1>
    <hr class="mb-5">

    <div class="row">
        <div class="col-8">
            <PostsView/>
        </div>
        <div class="col-4">
            <NewPosts/>
        </div>
    </div>
</template>

<style scoped>
</style>
