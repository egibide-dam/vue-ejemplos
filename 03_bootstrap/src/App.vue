<script setup>
const nombre = 'Nieves';
</script>

<template>
    <div class="container pt-5">
        <h1>¡Hola {{ nombre }}!</h1>
        <p class="alert alert-success">Esto es una prueba.</p>
    </div>
</template>

<style scoped>
h1 {
    color: tomato;
}
</style>
