let a = Number(prompt("Digite o primeiro número"));
let b = Number(prompt("Digite o segundo número"));

let sum = a + b;
let sub = a - b;
let multi = a * b;
let div = a / b;
let rest = a % b;

alert(`A soma é igual a: ${sum}`);
alert(`A subtração é igual a: ${sub}`);
alert(`A multiplicação é igual a: ${multi}`);
alert(`A divisão é igual a: ${div.toFixed(2)}`);
alert(`O resto da divisão é: ${rest}`);

if (sum % 2 == 0) {
  alert("A soma dos números é par");
} else {
  alert("A soma dos números é ímpar");
}

if (a == b) {
  alert("Os números inseridos são iguais");
} else {
  alert("Os números inseridos são diferentes");
}
