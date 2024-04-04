# Aula 01

```
Profa.: Lisandra Cruz
Monitora: Beatriz Ramerindo
```

## Estrutura de condição

<p align="center">
  <img width="500" src="https://user-images.githubusercontent.com/7760933/218580978-63770ace-c9e5-4ed4-94d0-a24bc5e9f5e1.png">
</p>

Uma estrutura condicional, como seu próprio nome sugere, trabalha em determinadas condições, ou seja, <b>sua execução depende de uma condição que deve ser satisfeita.</b>.

### 🛣 if / else if / else

<b>Estrutura condicional simples</b>: A estrutura condicional `if` é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira.

Se for falsa, executa as afirmações dentro de else.

```javascript
if (condicao) {
  // faz algo
} else {
  // se a condição acima não for atendida
  // faça o que tiver aqui!
}
```

Temos o `else if` para verificação de mais condições dentro da nossa estrutuda condicional:

```javascript
  if(condicao) {
    // faz algo
  } else if (outra condicao) {
    // faz outra coisa - que tal pesquisar mais sobre?
  } else {
    // se nenhuma das condições forem atendidas
    // faça o que tiver aqui!
  }
```

## switch / case

A estrutura condicional switch permite executar um bloco de código diferente de acordo com cada opção (cada case) especificada. Seu uso é indicado quando os valores a serem analisados nessas condições são pré-definidos.

> Essa estrutura é similar ao if/else e devemos utilizá-la quando queremos comparar a mesma variável ou expressão com várias opções. O if/else devemos utilizar quando queremos realizar uma série de verificações distintas.

```javascript
switch (expressao) {
  case valor1:
    //Instruções executadas quando o resultado da expressão for igual á valor1
    break
  case valor2:
    //Instruções executadas quando o resultado da expressão for igual á valor2
    break
  ...
  case valueN:
    //Instruções executadas quando o resultado da expressão for igual á valorN
    break
  default:
    //Instruções executadas quando o valor da expressão é diferente de todos os cases
    break
}

```

`break` é a palavra reservada que finaliza a execução do switch. Caso não especificada no final do bloco de código em execução, as linhas dos blocos de código seguintes também serão executadas.

`default` é a palavra reservada que define o bloco de código a ser executado se nenhum dos cases atenderem à expressão declarada no switch.

## Operador ternário

O operador condicional (ternário) é o único operador JavaScript que possui três operandos. Este operador é frequentemente usado como um atalho para a instrução if.

```javascript
condition ? expr1 : expr2;
```

🏋🏽 Bora praticar.. clique aqui para acessar a [lista de atividades](https://docs.google.com/document/d/1qEdaMjPX9npERnQLLwXl7i9ZkGUPry_ZcNqbrl7J5vo).
