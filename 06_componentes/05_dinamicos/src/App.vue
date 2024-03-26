<script setup>
import { ref } from 'vue';
import ContactoCliente from '@/components/ContactoCliente.vue';
import ProductosCatalogo from '@/components/ProductosCatalogo.vue';

const opciones = {
    ProductosCatalogo,
    ContactoCliente
}

const seleccion = ref('ProductosCatalogo');
</script>

<template>
    <h1>Ejemplo de componentes dinámicos</h1>
    <nav class="navbar navbar-expand bg-body-secondary mb-5">
        <div class="navbar-nav px-3">
            <button class="nav-link link-primary" @click="seleccion='ProductosCatalogo'">Catálogo de productos</button>
            <div class="vr mx-3"/>
            <button class="nav-link link-primary" @click="seleccion='ContactoCliente'">Formulario de contacto</button>
        </div>
    </nav>
    <main>
        <component :is="opciones[seleccion]"></component>
    </main>
</template>

<style scoped>
</style>
