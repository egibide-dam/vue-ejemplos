<script setup>
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, ref, computed } from 'vue'

onBeforeMount(() => console.log('Antes del montaje de Producto'));
onMounted(() => console.log('Ya montado Producto'));
onBeforeUpdate(() => console.log('Antes de actualizar contador: ' + contador.value))
onUpdated(() => console.log("Actualizado en el DOM. Contador: " + contador.value))
onBeforeUnmount(() => console.log('Antes de desmontar Producto'));
onUnmounted(() => console.log('Desmontado Producto'));

const contador = ref(3);

const productos = computed(() => {
    let datos = [];

    for (let i = 0; i < contador.value; i++) {
        datos.push(`Producto ${i + 1}`);
    }

    return datos;
});
</script>

<template>
    <h2>Lista de productos</h2>
    <div class="row p-3 align-items-start">
        <ul class="list-group col-3">
            <li class="list-group-item" v-for="(producto, index) of productos" :key="index">{{ producto }}</li>
        </ul>
        <div class="col-3 border rounded p-3">
            <div class="row">
                <div class="col">
                    <label class="col-form-label">Productos: {{ contador }}</label>
                </div>
                <div class="col-auto">
                    <button class="btn btn-primary" @click="contador++">Agregar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
