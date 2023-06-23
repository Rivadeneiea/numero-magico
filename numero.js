document.addEventListener("DOMContentLoaded", function () {
  let numAleatorio;
  let comenzar = document.getElementById("comenzar");
  let juegos = document.getElementById("juego");
  let adivinar = document.getElementById("adivina");
  let numIngresado = document.getElementById("numeroIngresado");
  let resultados = document.getElementById("resultado");

  comenzar.addEventListener("click", () => {
    numAleatorio = Math.floor(Math.random() * 1000) + 1;
    console.log("numAleatorio :", numAleatorio);
    juegos.style.display = "block";
    comenzar.disabled = true;
  });
  adivinar.addEventListener("click", () => {
    let numeroadivinado = parseInt(numIngresado.value);
    if (isNaN(numeroadivinado)) {
      resultados.textContent = alert("ingrese un numero valido");
    } else if (numeroadivinado < numAleatorio) {
      resultados.textContent = alert("numero muy bajo");
    } else if (numeroadivinado > numAleatorio) {
      resultados.textContent = alert(" numero muy alto");
    } else {
      resultados.textContent = alert("ganaste");
    }
  });
});
