<script setup>
// Dependiendo de cómo creemos las propiedades computadas usaremos un import u otro
import {ref, reactive, computed} from "vue";

// Constante "normal"
const taller = 'Taller Arriaga';

// --- ref ---

// ref envuelve el string en un objeto cuya principal propiedad es value
let servicio1 = 'Basico';
const servicio2 = ref('Mejorado');

// Modificar el valor desde JavaScript
servicio1 = 'Normal';
servicio2.value = 'Especial';

// --- reactive ---

// Utiliza un objeto, no un tipo de dato primitivo
const repuesto1 = reactive({
    id: 1,
    nombre: 'Filtro de aceite',
    precio: 150,
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
    <div class="container pt-5">
        <h1 class="display-1">{{ taller }}</h1>

        <h2>Servicios disponibles</h2>
        <dl class="list-group">
            <dt>Servicio 1</dt>
            <dd>{{ servicio1 }}</dd>
            <dt>Servicio 2</dt>
            <dd>{{ servicio2 }}</dd>
        </dl>

        <div>
            <button class="btn btn-primary me-2" @click="servicio1='Básico'">
                Modificar la categoría de S1
            </button>
            <button class="btn btn-primary" @click="servicio2='Premiun'">
                Modificar la categoría de S2
            </button>
        </div>

        <h2 class="mt-5">Repuestos</h2>
        <table class="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Disponibilidad</th>
                <th>Precio</th>
                <th>Precio</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>{{ repuesto1.nombre }}</td>
                <td>{{ repuesto1.disponibilidad }}</td>
                <td>{{ evaluarPrecio }}</td>
                <td>{{ funcionEvaluarPrecio() }}</td>
            </tr>
            </tbody>
        </table>

        <div>
            <button class="btn btn-primary me-2" @click="repuesto1.disponibilidad=true">
                Modificar la disponibilidad de R1
            </button>
            <button class="btn btn-primary" @click="repuesto1.precio=100">
                Modificar el precio de R1
            </button>
        </div>
    </div>
</template>

<style scoped>
</style>
