<script setup>
import { ref } from 'vue';

const centro = ref(); // Propiedad reactiva inicialmente vacía.
</script>

<template>
    <div class="row justify-content-center align-items-center">
        <div class="col-3">
            <label class="form-label" for="centro">Elige un centro</label>
            <select class="form-select" name="centro" id="centro" v-model="centro">
                <option value="no" disabled selected>Centro</option>
                <option value="ar">Arriaga</option>
                <option value="jo">Jesús Obrero</option>
                <option value="mz">Mendizorrotza</option>
                <option value="mo">Molinuevo</option>
                <option value="nc">Nieves Cano</option>
            </select>
            <button class="btn btn-primary mt-3" @click="centro=''">
                Limpiar la selección
            </button>
        </div>
        <div class="col-4 card p-5">
            <img v-if="centro === 'ar'" alt="Egibide Arriaga" class="logo" src="./assets/logos/ar.svg"/>
            <img v-else-if="centro === 'jo'" alt="Egibide Jesús Obrero" class="logo" src="./assets/logos/jo.svg"/>
            <img v-else-if="centro === 'mz'" alt="Egibide Mendizorrotza" class="logo" src="./assets/logos/mz.svg"/>
            <img v-else-if="centro === 'mo'" alt="Egibide Molinuevo" class="logo" src="./assets/logos/mo.svg"/>
            <img v-else-if="centro === 'nc'" alt="Egibide Nieves Cano" class="logo" src="./assets/logos/nc.svg"/>
            <img v-else alt="Egibide" class="logo" src="./assets/logos/egibide.svg"/>
        </div>
    </div>
</template>

<style scoped>
.logo {
    height: 200px;
}
</style>
