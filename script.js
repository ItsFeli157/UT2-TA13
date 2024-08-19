document.addEventListener('DOMContentLoaded', () => {
    const parrafo = document.getElementById('text');
    const boton = document.getElementById('changeTextButton');

    boton.addEventListener('click', () => {
        parrafo.textContent = "Texto cambiado";
    });
});
