<script setup>
import { ref } from 'vue';

// ref de un objeto. También se puede con reactive.
const producto = ref({
    nombre: 'Monitor',
    tamanyo: 24,
    precio: 1000,
    vendido: false
});
</script>

<template>
    <h1>Producto</h1>
    <table class="table border w-25">
        <tbody>
        <tr>
            <th class="table-dark">Nombre</th>
            <td>{{ producto.nombre }}</td>
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
            <td :class="{ 'bg-warning': producto.vendido }">{{ producto.vendido }}</td>
        </tr>
        </tbody>
    </table>

    <h1 class="mt-5">Producto</h1>
    <div class="card p-3">
        <div class="mb-3">
            <label class="form-label" for="nombre">Nombre</label>
            <input class="form-control" id="nombre" type="text" v-model="producto.nombre"/>
        </div>
        <div class="mb-3">
            <label class="form-label" for="tamanyo">Tamaño</label>
            <input class="form-control" id="tamanyo" type="text" v-model="producto.tamanyo"/>
        </div>
        <div class="mb-3">
            <label class="form-label" for="precio">Precio</label>
            <input class="form-control" id="precio" type="text" v-model="producto.precio"/>
        </div>
        <div>
            <input class="form-check-input" type="checkbox" id="vendido" v-model="producto.vendido">
            <label class="form-check-label ms-2" for="vendido">
                Vendido
            </label>
        </div>
    </div>
</template>

<style scoped>
</style>
