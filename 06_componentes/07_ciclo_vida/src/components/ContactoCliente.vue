<script setup>
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from 'vue';

onBeforeMount(() => console.log('Antes del montaje de Contacto'));
onMounted(() => console.log('Ya montado Contacto'));
onBeforeUnmount(() => console.log('Antes de desmontar Contacto'));
onUnmounted(() => console.log('Desmontado Contacto'));
</script>

<template>
    <h2>Completa el formulario</h2>
    <div class="card col-4 p-3">
        <div class="mb-3">
            <label class="form-label" for="mensaje">Mensaje</label>
            <input class="form-control" placeholder="Escribe algo..." id="mensaje" type="text"/>
        </div>
        <div>
            <button class="btn btn-primary">Enviar</button>
        </div>
    </div>
</template>

<style scoped>
</style>
