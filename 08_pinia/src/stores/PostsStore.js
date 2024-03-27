import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
// Fichero que contiene los dos posteos iniciales.
import posteos from '@/data/posts.json';

// Crear el store. El nombre siempre empieza por use
export const usePostsStore = defineStore('PostsStore', () => {
    //state - todas las variables son ref
    // posts podrá ser utilizado en todos los componentes. Está en el return.
    const posts = ref(posteos);
    //getters - para acceder a valores y aplicar calculos usamos computadas
    const calcularCantidad = computed(() => posts.value.length);

    //actions - son funciones
    function agregarPost(nuevoPost) {
        posts.value.push(nuevoPost);
    }

    return {posts, calcularCantidad, agregarPost}
})
