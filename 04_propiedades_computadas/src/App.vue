<script setup>
// Dependiendo de cómo creemos las propiedades computadas usaremos un import u otro
import {ref, reactive, computed} from "vue";

// Constante "normal"
const taller = 'Taller Arriaga';

// --- ref ---

// ref envuelve el string en un objeto cuya principal propiedad es value
let servicio1 = 'Basico';
const servicio2 = ref('Especial');

// Modificar el valor desde JavaScript
servicio1 = 'Normal';

// --- reactive ---

// Utiliza un objeto, no un tipo de dato primitivo
const repuesto1 = reactive({
    id: 1,
    nombre: 'Filtro de aceite',
    precio: 100,
    disponibilidad: true
});

// Modificar el valor desde JavaScript
repuesto1.disponibilidad = false;

// --- Propiedad computada ---

const evaluarPrecio = computed(() => {
    return (repuesto1.precio < 120) ? '¡Oferta!' : 'Precio regular';
});

// --- Método ---

const funcionEvaluarPrecio = () => {
    return (repuesto1.precio < 120) ? '¡Oferta!' : 'Precio regular';
};

</script>

<template>
    <h1>{{ taller }}</h1>
    <h3>Servicios disponibles</h3>
    <dl>
        <dt>Servicio 1</dt>
        <dd>{{ servicio1 }}</dd>
        <dt>Servicio 2</dt>
        <dd>{{ servicio2 }}</dd>
    </dl>

    <button @click="servicio1='Básico'">Modificar la categoría de S1</button>
    <button @click="servicio2='Premiun'">Modificar la categoría de S2</button>

    <h3>Repuestos</h3>
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Disponibilidad</th>
            <th>Precio</th>
            <th>Precio</th>
        </tr>
        <tr>
            <td>1</td>
            <td>{{ repuesto1.nombre }}</td>
            <td>{{ repuesto1.disponibilidad }}</td>
            <td>{{ evaluarPrecio }}</td>
            <td>{{ funcionEvaluarPrecio() }}</td>
        </tr>
    </table>

    <button @click="repuesto1.disponibilidad=false">Modificar la disponibilidad de R1</button>
    <button @click="repuesto1.precio=150">Modificar el precio de R1</button>

</template>

<style scoped>
</style>
