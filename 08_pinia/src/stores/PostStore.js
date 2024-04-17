import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import datos from '@/data/posts.json';

export const usePostStore = defineStore('PostStore', () => {

    const posts = ref(JSON.parse(localStorage.getItem('posts')) ?? datos);

    const numPosts = computed(() => posts.value.length);
    const siguienteId = computed(() => posts.value.length + 1);

    function agregar(nuevoPost) {
        posts.value.push(nuevoPost);
        localStorage.setItem('posts', JSON.stringify(posts.value));
    }

    return {posts, numPosts, siguienteId, agregar}
})
