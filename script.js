let numeroSecreto;
let intentos = 0;

function iniciarJuego() {
  numeroSecreto = Math.floor(Math.random() * 10) + 1;
  intentos = 0;
  document.getElementById("mensaje").innerText = "";
  document.getElementById("contador").innerText = "";
}

function adivinarNumero() {
  const inputNumero = document.getElementById("inputNumero").value;
  
  if (inputNumero === "") {
    alert("Por favor, ingresa un número.");
    return;
  }

  const numero = parseInt(inputNumero);
  intentos++;

  if (numero < numeroSecreto) {
    document.getElementById("mensaje").innerText = "El número secreto es mayor.";
  } else if (numero > numeroSecreto) {
    document.getElementById("mensaje").innerText = "El número secreto es menor.";
  } else {
    document.getElementById("mensaje").innerText = `¡Felicidades! Adivinaste el número secreto en ${intentos} intento(s).`;
  }

  document.getElementById("contador").innerText = `Intentos: ${intentos}`;
  document.getElementById("inputNumero").value = "";
}

function reiniciarJuego() {
  iniciarJuego();
  document.getElementById("mensaje").innerText = "";
  document.getElementById("contador").innerText = "";
  document.getElementById("inputNumero").value = "";
}

// Iniciar el juego cuando cargue la página
window.onload = iniciarJuego;
