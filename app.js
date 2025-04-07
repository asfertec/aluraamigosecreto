// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Este código implementa un sorteo de nombres, permitiendo agregar nombres a una lista, seleccionar un nombre aleatorio y reiniciar el sorteo.
// Código para el sorteo de nombres
let listaNombres = [];

// Función para agregar un nombre a la lista
function incluirNombre() {
    let nombreIngresado = document.getElementById("nombreInput").value.trim();

    if (nombreIngresado === "") {
        mostrarMensaje("Por favor, escribe un nombre válido.");
        return;
    }

    listaNombres.push(nombreIngresado);
    document.getElementById("nombreInput").value = "";
    actualizarLista();
    mostrarMensaje("");
}

// Función para actualizar la lista en la pantalla
function actualizarLista() {
    let contenedorLista = document.getElementById("listaNombres");
    contenedorLista.innerHTML = "";

    listaNombres.forEach((nombre) => {
        let elemento = document.createElement("li");
        elemento.className = "item-list";
        elemento.textContent = nombre;
        contenedorLista.appendChild(elemento);
    });
}

// Función para mostrar un nombre aleatorio de la lista
function seleccionarAleatorio() {
    if (listaNombres.length < 2) {
        mostrarMensaje("Agrega al menos dos nombres para hacer un sorteo.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaNombres.length);
    let nombreSorteado = listaNombres[indiceAleatorio];
    mostrarMensaje("🎉 Tu Amigo Secreto es: " + nombreSorteado + " 🎉");
}

// Función para mostrar mensajes o resultados
function mostrarMensaje(mensaje) {
    let contenedorResultado = document.getElementById("mensajeResultado");
    contenedorResultado.textContent = mensaje;
}

// Función para reiniciar todo
function reiniciarSorteo() {
    listaNombres = [];
    document.getElementById("listaNombres").innerHTML = "";
    mostrarMensaje("");
}
