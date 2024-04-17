<script setup>
import PostView from '@/components/PostList.vue';
import PostNew from '@/components/PostNew.vue';
</script>

<template>
    <h1>Ejemplo usando Pinia</h1>
    <hr class="mb-5">

    <div class="row">
        <div class="col-8">
            <PostView/>
        </div>
        <div class="col-4">
            <PostNew/>
        </div>
    </div>
</template>

<style scoped>
</style>
