//DOM SELEC
const idade = document.querySelector(".idade");
const altura = document.querySelector(".altura");
const peso = document.querySelector(".peso");
const selectGenero = document.querySelector(".genero");
const buttonCalc = document.querySelector(".calcButton");
const proteina = document.querySelector("#prot");
const carboidrato = document.querySelector("#carbo");
const gordura = document.querySelector("#gordura");
const resultado = document.querySelector("#titleResultado");

//EVENTS

buttonCalc.addEventListener("click", calcMacros);

//FUNCTIONS

function calcMacros() {
  if (selectGenero.selectedIndex == 0) {
    //homem
    var qtdeProteina = 1.6 * peso.value;
    var qtdeGordura = 1 * peso.value;
    var qtdeCarboidrato = 8 * peso.value;
    var calorias = (qtdeProteina + qtdeCarboidrato) * 4 + qtdeGordura * 9;
  } else {
    var qtdeProteina = 1.3 * peso.value;
    var qtdeGordura = 0.4 * peso.value;
    var qtdeCarboidrato = 5 * peso.value;
    var calorias = (qtdeProteina + qtdeCarboidrato) * 4 + qtdeGordura * 9;
  }

  carboidrato.textContent = Math.round(qtdeCarboidrato);
  proteina.textContent = Math.round(qtdeProteina);
  gordura.textContent = Math.round(qtdeGordura);
  resultado.textContent = "Resultado = " + Math.round(calorias) + " Kcal";
}
