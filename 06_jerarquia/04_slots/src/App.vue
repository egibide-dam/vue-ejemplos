<script setup>
import SubComponente from '@/components/SubComponente.vue';

const frase = 'Este texto aparecerá en el slot.';
</script>

<template>
    <header>
        <h1>Ejemplo slots</h1>
        <hr class="mb-5">
    </header>

    <SubComponente>
        <!-- slot sin nombre -->
        <h2>Imagen</h2>
        <img class="rounded" src="https://picsum.photos/200" alt="logo">

        <!-- slot con nombre -->
        <template #mensaje>
            <h2 class="mt-5">Frase</h2>
            <p>{{ frase }}</p>
        </template>
    </SubComponente>
</template>

<style scoped>
</style>

