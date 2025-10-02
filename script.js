let iniciarSesion = document.getElementById("iniciar-sesion");

iniciarSesion.addEventListener("click", function () {
    alert("¡Inicio de Sesión Exitoso!");
});

let btnRentar = document.querySelectorAll(".rentar");
btnRentar.forEach(function (boton) {
    boton.addEventListener("click", function () {
        boton.innerText = "No Disponible";
        boton.style.backgroundColor = "red";
    });
});

let btnGenero = document.querySelectorAll(".menu-libros");
let librosTitulo = document.getElementById("todos-libros-titulo");

btnGenero.forEach(function (boton) {
    boton.addEventListener("click", function (event) {
        event.preventDefault();
        librosTitulo.innerText = boton.textContent;
    });
});
