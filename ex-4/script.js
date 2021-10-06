const imagensGaleria = document.querySelectorAll(".container img");
const imagemModal = document.querySelector(".modal img");
const modal = document.querySelector(".modal");

function abrirModal(src) {
    imagemModal.src = src;
}

imagensGaleria.forEach(imagem => {
    imagem.addEventListener("click", event => {
        modal.style.display = 'flex';
        abrirModal(event.target.src);
    });
});

modal.addEventListener("click", () => {
    modal.style.display = 'none';
});