<script setup>
import { reactive } from "vue";

const lipsum = reactive({
    placeholder: 'Cargando...',
    texto: ''
});

const props = defineProps({
    parrafos: {
        type: Number,
        default: 3
    }
})

fetch(`https://baconipsum.com/api/?type=meat-and-filler&paras=${props.parrafos}&start-with-lorem=1&format=html`)
    .then(response => response.text())
    .then(datos => {
        lipsum.placeholder = '';
        lipsum.texto = datos;
    })
    .catch(error => {
        lipsum.placeholder = 'Error.';
        console.log(error);
    });
</script>

<template>
    <p>{{ lipsum.placeholder }}</p>
    <p v-html="lipsum.texto"></p>
</template>

<style scoped>
</style>
