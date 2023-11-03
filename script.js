//alert("Hola este es mi Javascript");
let contenidoTitulo = "Nombre bonito";

let titulo = document.querySelector(".nombre")
titulo.innerHTML = contenidoTitulo;

let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if (textoTitulo == "Nombre bonito") {
    titulo.innerHTML = "Otro";
}else {
    console.log("no se cumple");
}

let nombre = "Jose";
let ciudad = "Monteria";
let gusto = "cafe";

let parrafo = document.querySelector(".parrafo2");

function cambiarTexto(nombre, ciudad, gusto) {
    let contenido = `Me llamo ${nombre}, nací en ${ciudad} y vivo 
    en lorica. Me gusta el ${gusto} y salir a pasear en dias de sol.`;

    return contenido;
}

parrafo.innerText = cambiarTexto(nombre, ciudad, gusto);

let menu_responsive = document.querySelector(".checkbtn");
      menu_responsive.onclick = function () {
        navBar = document.querySelector(".navbar");
        navBar.classList.toggle("active");
      };