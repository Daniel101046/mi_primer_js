let contador = 0;

const valorPantalla = document.querySelector("#valor");
const btnIncrementar = document.querySelector("#btn-incrementar");
const btnRestar = document.querySelector("#btn-restar");

function actualizarColor() {
    if (contador > 0) {
        valorPantalla.style.color = "#16a34a";
    } else if (contador < 0) {
        valorPantalla.style.color = "#dc2626";
    } else {
        valorPantalla.style.color = "#0f172a";
    }
}

btnIncrementar.addEventListener("click", () => {
    contador++;
    valorPantalla.textContent = contador;
    actualizarColor();
});

btnRestar.addEventListener("click", () => {
    contador--;
    valorPantalla.textContent = contador;
    actualizarColor();
});