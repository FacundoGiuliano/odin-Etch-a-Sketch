const container = document.querySelector(".container");
const button = document.querySelector("button");

function getCuadricula(num = 16) {
    container.innerHTML = "";
    const cellSize = 400 / num;
    for (let i = 1; i <= num * num; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-item");
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "lightblue";
        });
        container.appendChild(cell);
    };
};

button.addEventListener("click", () => {
    const num = prompt("Ingrese la cuadricula");

    if (isNaN(num) || num < 1 || num > 100) {
        alert('Por favor, ingresa un número válido entre 1 y 100.');
        return;
    };
    getCuadricula(num);
});

getCuadricula();