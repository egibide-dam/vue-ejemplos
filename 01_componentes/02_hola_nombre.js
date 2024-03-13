class HolaNombre extends HTMLElement {

    // El método constructor se llama cuando el componente se inicializa por primera vez.
    // Debe llamar a super() y puede establecer cualquier valor por defecto o realizar otros procesos de pre-renderización.
    constructor() {
        console.log("Componente construido");
        super();
    }

    // Esta función es llamada cuando el Componente Web es anexado a un Modelo de Objeto de Documento
    connectedCallback() {
        console.log("Se usa la etiqueta");
        this.innerHTML = `<p>¡Hola ${this.name}!</p>`;
        this.addEventListener('click', this.fSaludar);
    }

    // Atributo observado.wrapper
    static get observedAttributes() {
        return ['name'];
    }

    // Cambia el valor del atributo.
    attributeChangedCallback(property, oldValue, newValue) {
        console.log("El atributo " + property + " tenía el valor " + oldValue + " y ahora tiene " + newValue);
        this.name = newValue;
    }

    fSaludar() {
        alert("Hola " + this.name);
    }
}

customElements.define('hola-nombre', HolaNombre);
