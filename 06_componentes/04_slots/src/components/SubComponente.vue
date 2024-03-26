<script setup>
</script>

<template>
    <main>
        <slot>
            <!-- Aquí se inyecta el código HTML que proviene del padre -->
        </slot>
    </main>
    <footer>
        <slot name="mensaje">
            <!-- Aquí se inyecta el código HTML con el mensaje desde el padre -->
        </slot>
    </footer>
</template>

<style scoped>
</style>
