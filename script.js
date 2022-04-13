let input = document.querySelector("input");
let btn = document.querySelector(".btn");
let circle2 = document.querySelector(".circle2");
let number = document.querySelector(".number");

btn.addEventListener("click", updateCircle);

function updateCircle() {
  let valorEmPorcentagem = (input.value * 440) / 100;
  circle2.innerHTML = circle2.style.strokeDashoffset = 440 - valorEmPorcentagem;
  number.innerHTML = `<h2>${input.value}% </h2>`;
}

// Aqui eu pego o evento de keypress da tecla Enter
document.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    updateCircle();
  }
});
