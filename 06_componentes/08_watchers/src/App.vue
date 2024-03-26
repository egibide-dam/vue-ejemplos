<script setup>
import { reactive, ref, watch } from 'vue'

const pregunta = ref('');

const respuesta = reactive({
    mensaje: 'Las preguntas terminan con el signo "?"',
    imagen: 'https://www.desafiocoaching.com/index_htm_files/37056.png'
});

watch(pregunta, (nuevaPregunta, viejaPregunta) => {

    console.log(`La nueva pregunta es ${nuevaPregunta}. La vieja es ${viejaPregunta}`);

    if (nuevaPregunta.includes('?')) {

        respuesta.mensaje = 'Pensando...';

        fetch('https://yesno.wtf/api')
            .then(response => response.json())
            .then(datos => {
                respuesta.mensaje = datos.answer;
                respuesta.imagen = datos.image;
            })
            .catch(error => {
                respuesta.mensaje = 'Error';
                console.log(error);
            });
    }
})
</script>

<template>
    <h1>Ejemplo de watchers</h1>
    <hr class="mb-5">

    <div class="row">
        <div class="col-4">
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title">Pregunta</h2>
                    <p class="card-text">Haz una pregunta de sí o no.</p>
                    <input class="form-control" v-model="pregunta"/>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title">Respuesta</h2>
                    <p class="card-text">{{ respuesta.mensaje }}</p>
                </div>
                <img class="card-img-bottom" :src="respuesta.imagen" alt="Imagen">
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
