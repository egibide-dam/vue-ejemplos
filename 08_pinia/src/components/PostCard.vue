<script setup>
defineProps({
    titulo: String,
    contenido: String
})
</script>

<template>
    <section class="card">
        <article class="card-title">
            {{ titulo }}
        </article>
        <article class="card-content">
            {{ contenido }}
        </article>
    </section>
</template>

<style scoped>
</style>
