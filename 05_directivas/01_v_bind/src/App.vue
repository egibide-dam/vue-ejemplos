<script setup>
import { ref } from 'vue';

// ref de un objeto. También se puede con reactive.
const producto = ref({
    nombre: 'Monitor',
    tamanyo: 24,
    precio: 1000,
    vendido: false
});

// ref de una variable booleana
const esRojo = ref(false);

const estiloRojo = {
    backgroundColor: 'red'
}

const estiloVerde = {
    backgroundColor: 'green'
}
</script>

<template>
    <h1>Ejemplo v-bind</h1>
    <hr class="mb-5">

    <h2>Producto</h2>
    <table class="table border w-25">
        <tbody>
        <tr>
            <th class="table-dark">Nombre</th>
            <td v-bind:class="{ comprado: producto.vendido }">{{ producto.nombre }}</td>
        </tr>
        <tr>
            <th class="table-dark">Tamaño</th>
            <td>{{ producto.tamanyo }}</td>
        </tr>
        <tr>
            <th class="table-dark">Precio</th>
            <td>{{ producto.precio }}</td>
        </tr>
        <tr>
            <th class="table-dark">Vendido</th>
            <td :style="esRojo ? estiloRojo : estiloVerde">{{ producto.vendido }}</td>
        </tr>
        </tbody>
    </table>

    <div class="mt-5">
        <button class="btn btn-primary me-2" @click="producto.vendido=true">
            Vender el producto
        </button>
        <button class="btn btn-primary me-2" @click="esRojo=true">
            Cambiarlo a rojo
        </button>
    </div>
</template>

<style scoped>
.comprado {
    text-decoration: line-through;
    font-weight: bold;
    color: dimgray;
}
</style>
