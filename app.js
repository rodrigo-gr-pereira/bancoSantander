/*
Ex1:
alert('Boas vinda ao jogo do número secreto');
let numeroSecreto = 5;
let chute = prompt('Esccolha um número entre 1 e 10');

if (chute == numeroSecreto) {
    console.log('Isso ai! Você descobriu o número secreto (5)')
}

Ex2:    
alert('Boas vindas ao nosso site!');
let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
alert("Erro!Preencha todos os campos");
let mensagemDeErro = "Erro! Preencher todos os campos";
alert(mensagemDeErro);

*/

let nome = prompt("Qaul o nome do usuario?");
let idade = prompt("Qual a sua idade?");

if(idade >= 18){
    alert("Pode Dirigir")
}else{
    alert("Não pode dirigir!");
}
