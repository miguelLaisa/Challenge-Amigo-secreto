// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;
  console.log(nombreAmigo);

  if (validarNombre(nombreAmigo)) {
    amigos.push(nombreAmigo);
    console.log("Los amigos son: " + amigos);
    limpiarInput();
    actualizarListaAmigos();
    if (validarAmigosDisponibles()) {
      console.log("jecurar funcion sorteo");
    }
  }
}

function validarNombre(nombreAmigo) {
  if (nombreAmigo === "") {
    alert("El nombre no puede estar vacío");
    return false;
  } else {
    return true;
  }
}

function limpiarInput() {
  document.getElementById("amigo").value = "";
  document.getElementById("amigo").focus();
}

function actualizarListaAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let index = 0; index < amigos.length; index++) {
    let amigo = amigos[index];
    let li = document.createElement("li");
    li.innerText = amigo;
    lista.appendChild(li);
  }
}

function validarAmigosDisponibles() {
  if (amigos.length >= 2) {
    return true;
  } else {
    alert("Debe haber al menos 2 amigos para realizar el sorteo");
    return false;
  }
}
