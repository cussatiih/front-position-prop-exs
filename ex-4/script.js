const imagensGaleria = document.querySelectorAll(".container img");
const imagemModal = document.querySelector(".modal img");
const linkModal = document.querySelector(".modal a");
const modal = document.querySelector(".modal");

function abrirModal(src) {
    imagemModal.src = src;
    linkModal.href = src;
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

linkModal.addEventListener("click", event => {
    event.stopPropagation();
});