// const maca = {nome: "Maça", precoDoKg: 5.59, categoria: "frutas"}

// seria dificil de organizar criando varias variáveis
// const nomeMaca = "maça"
// const precoDoKgMaca = 5.59
// const categoriaMaca = 'frutas'

// console.log(Object.values(maca)) // acessando os valores
// const key = Object.keys(maca) // acessando as propriedades
// For tradicional para acessar cada elemento do objeto
// for(let i = 0; i < key.length ; i++) {
//   console.log(key[i] + ": "+ maca[key[i]])
// }

// Acessando elementos do array
// console.log(maca)
// console.log(maca.categoria)
// console.log(maca.catedgoria)
// console.log(maca["categoria"])
// const categoria = 'nome'
// console.log(maca["categoria"])
// console.log(maca["catedoria"])
// console.log(maca["categdoria"])

// Uso do for..in
// for(const propriedade in maca) {
//   console.log(propriedade+": "+maca[propriedade])
  // console.log(maca[propriedade])
  // console.log(maca.propriedade)
  // console.log(maca.propriedade)
// }

const pessoas = [
  { nome: "Lisandra Cruz", apelido: "Lis", idade: 28 },
  { nome: "Beatriz Ramerindo", apelido: "Bea", idade: 19 },
  { nome: "Dandara Lima", apelido: "Dada", idade: 5 },
];
// Acessando elementos do array
// console.log(pessoas)
// console.log(pessoas[3]) // posição inexistente retorna undefined
// const pessoaDada = pessoas[2];
// console.log(pessoaDada.nome)
// console.log(pessoas[2]["nome"])

const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(numeros)
// Alguns métodos do array
// numeros.push(11)
// console.log(numeros)
// numeros.pop()
numeros.pop()
// console.log(numeros)

// Removendo um elemento do array
const novoArray = []
// for(let cont = 0; cont < numeros.length; cont++){
//   if(numeros[cont] !== 4) {
//     novoArray.push(numeros[cont])
//   }
// }

for(const elemento of numeros){
  if(elemento < 4) {
    novoArray.push(elemento)
  }
}
console.log(novoArray)