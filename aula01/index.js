/* 
Uso de uma estrutura unica para verificar
da mesma varivel, nesse caso temperatura.
*/
if (temperatura === 18) {
  console.log("ta frio hein");
} else if (temperatura === 11) {
  console.log("ta quente hein");
} else if (temperatura === 21) {
  console.log("ta quente hein");
} else if (temperatura === 4) {
  console.log("ta quente hein");
} else if (temperatura === 6) {
  console.log("ta quente hein");
} else if (temperatura === 7) {
  console.log("ta quente hein");
} else if (temperatura === 24) {
  console.log("ta quente hein");
}

/* 
Quando não for preciso, evite o uso de 
multiplos ifs, evitando verificações 
desnecessárias
*/
if (temperatura === 18) {
  console.log("ta frio hein");
}
if (temperatura === 11) {
  console.log("ta quente hein");
}
if (temperatura === 21) {
  console.log("ta quente hein");
}
if (temperatura === 4) {
  console.log("ta quente hein");
}
if (temperatura === 6) {
  console.log("ta quente hein");
}
if (temperatura === 7) {
  console.log("ta quente hein");
}
if (temperatura === 24) {
  console.log("ta quente hein");
}

/*
Uso do switch/case
*/
let temperatura = 18;

switch (temperatura) {
  case 18:
    console.log("ta frio");
    break;
  case 19:
    console.log("ta frio 2");
    break;
  case 20:
    console.log("ta frio 3");
    break;
  default:
    console.log("ta quente");
    break;
}

console.log(temperatura === 18 ? "Temperatura ótima" : "Ixeee, baixa ai!");

/* 
Uso de ternário aninhado é possível sim 
mas a depender da situação não é indicado,
preze também pela legibilidade do código
*/
temperatura === 18
  ? temperatura === 20
    ? "20 é bom"
    : "ixeee, baixa ai"
  : "Temperatura ótima";
