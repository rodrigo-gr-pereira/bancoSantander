
//Ex1:
alert('Boas vinda ao jogo do número secreto');
let numeroSecreto = 4;
console.log(numeroSecreto);
let chute; 
let tentativas = 1;

// enquanto chute nao for igual ao n. s.
while(chute != numeroSecreto){
    chute = prompt('Esccolha um número entre 1 e 10');
    //se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto  ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        if(chute > numeroSecreto){
            alert(`O número secreto é memor que ${chute}`);
        }else{
            alert(`O número é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

/*
Ex2:    
alert('Boas vindas ao nosso site!');
let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
alert("Erro!Preencha todos os campos");
let mensagemDeErro = "Erro! Preencher todos os campos";
alert(mensagemDeErro);

Ex3:
let nome = prompt("Qaul o nome do usuario?");
let idade = prompt("Qual a sua idade?");

if(idade >= 18){
    alert("Pode Dirigir")
}else{
    alert("Não pode dirigir!");
}

*/

 //