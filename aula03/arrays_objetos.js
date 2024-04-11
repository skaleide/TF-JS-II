/*
Dado um array de números, encontre o maior e o menor 
número existente no seguinte array 
[10, 9 , 33, 2, 12, 5, 124].
*/

const numeros = [1, -1 , 333, 2, 12, 5, 0];

let maior = numeros[0];
let menor = numeros[0];

for(let i = 0; i < numeros.length; i++) {
  if(numeros[i] > maior) {
    maior = numeros[i]
  } else if(numeros[i] < menor){
    menor = numeros[i]
  }
}
console.log(numeros.toString())
console.log('O maior numero do array é: ' + maior)
console.log('O menor numero do array é: ' + menor)