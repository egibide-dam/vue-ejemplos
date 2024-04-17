<script setup>
import Lipsum from "@/components/Lipsum.vue";
</script>

<template>
    <h2>Acerca de</h2>
    <hr>
    <Lipsum/>
    <RouterLink class="link-primary link-underline-opacity-0 link-underline-opacity-100-hover" :to="{ name: 'home' }">
        Volver a la página principal
    </RouterLink>
</template>
