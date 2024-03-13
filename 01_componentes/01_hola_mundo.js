class HolaMundo extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = "¡Hola Mundo!";
        console.log("Se ha utilizado la etiqueta hola-mundo");
    }

}

customElements.define('hola-mundo', HolaMundo);
