/* 
Faça um programa recebe três angulos como entrada e determine se é:
- Um triângulo equilátero (todos os lados iguais).
- Um triângulo isósceles (dois lados iguais).
- Um triângulo escaleno (todos os lados diferentes) (a soma de dois angulos 
  qualquer deve ser maior que o terceiro lado).
- Ou se não formam um triângulo 

*/
const angulo1 = 70;
const angulo2 = 70;
const angulo3 = 70;

// Transformamos em variáveis para deixar mais legível
const saoAngulosDiferentes = angulo1 !== angulo2 && angulo2 !== angulo3;
const saoAngulosIguais = angulo1 === angulo2 && angulo2 === angulo3;
const temDoisAngulosIguais =
  angulo1 === angulo2 || angulo1 === angulo3 || angulo2 === angulo3;
const eTriangulo = angulo1 + angulo2 + angulo3 === 180;

// possibilidade 1
if (eTriangulo && saoAngulosIguais) {
  console.log("Triângulo equilátero");
} else if (eTriangulo && temDoisAngulosIguais) {
  console.log("Triângulo isóceles");
} else if (
  eTriangulo & saoAngulosDiferentes &&
  angulo1 + angulo2 > angulo3 &&
  angulo2 + angulo3 > angulo1 &&
  angulo3 + angulo1 > angulo2
) {
  console.log("Triângulo escaleno");
} else if (!eTriangulo) {
  console.log("Não é um triangulo");
}

// possibilidade 2
if (eTriangulo) {
  if (saoAngulosIguais) {
    console.log("Triângulo equilátero");
  } else if (temDoisAngulosIguais) {
    console.log("Triângulo isóceles");
  } else if (
    saoAngulosDiferentes &&
    angulo1 + angulo2 > angulo3 &&
    angulo2 + angulo3 > angulo1 &&
    angulo3 + angulo1 > angulo2
  ) {
    console.log("Triângulo escaleno");
  }
} else {
  console.log("Não é um triangulo");
}

/* 
Desenvolva um simulador que precisa calcular a quantidade de combustível necessária para um voo. 
O programa recebe 3 dados: a distância do voo, o tipo de aeronave e a velocidade do vento. 
Leve em consideração 2 aeronaves: Boeing 737 (consome 900 litros por hora) ou Airbus A320O 
(consome 800 litros por hora). O programa deve: 
- Calcular o tempo de voo usando a fórmula: tempo = distância / velocidade.
- Calcular o consumo de combustível por hora de voo de acordo com o tipo de aeronave.
- Ajustar o consumo de combustível em 10% se a velocidade do vento for contra o voo (velocidade positiva). 
- Ajustar o consumo de combustível em 5% se a velocidade do vento for a favor do voo  (velocidade negativa).
- Calcular a quantidade total de combustivel necessária.
*/
const tipoDeNave = "Boeing 737";
const distanciaVoo = 1000;
const velocidadeVento = 1000;

const tempoVoo = distanciaVoo / velocidadeVento;
let consumoCombustivelPorHora = 0;

if (tipoDeNave !== "Boeing 737" && tipoDeNave !== "Airbus A320O") {
  console.log("Aeronave inválida");
} else {
  consumoCombustivelPorHora = tipoDeNave === "Boeing 737" ? 900 : 800;
}

if (velocidadeVento > 0) {
  consumoCombustivelPorHora *= 1.1;
  // 1.1 = 110%
  // consumoCombustivelPorHora = consumoCombustivelPorHora * 1.1;
} else {
  // 0.95 = 95%
  consumoCombustivelPorHora *= 0.95;
  // consumoCombustivelPorHora = consumoCombustivelPorHora * 0.95;
}

const combustivelTotal = (tempoVoo * consumoCombustivelPorHora).toFixed(0);
// toFixed(0) remove as casas decimais, deixando o numero exato
console.log(`Quantidade de combustivel necessária: ${combustivelTotal} litros`);
