<script setup>
defineProps({
    titulo: String,
    contenido: String
})
</script>

<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title fs-5 text-primary">
                {{ titulo }}
            </h3>
            <p class="card-text">{{ contenido }}</p>
        </div>
    </div>
</template>

<style scoped>
</style>
