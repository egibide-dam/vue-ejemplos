<script setup>
import { inject } from 'vue';

// inject(clave)
const fraseInyectada = inject('fraseANieto');
</script>

<template>
    <div class="card p-3">
        <h3>Componente "nieto"</h3>
        <p class="text-primary">{{ fraseInyectada }}</p>
    </div>
</template>

<style scoped>
</style>
