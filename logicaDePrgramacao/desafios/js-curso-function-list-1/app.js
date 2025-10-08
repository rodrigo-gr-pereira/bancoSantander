//1ª Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let tituto = document.querySelector('h1');
tituto.innerHTML = 'Hora do desafio';

//2ª Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function verificarClick(){
    console.log('O botão foi clicado');
};

//3ª Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function mostrarAlerta() {
    alert("Eu amo JS");
};

//4ª Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma 
// cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando
//  a resposta com o texto: Estive em {cidade} e lembrei de você.
 function mostrarCidade(){
  let cidade = prompt('Qual cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você.`);
 }

 //5ª Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
 function mostrarSoma(){
    let numero1 = parseInt(prompt('Digite o primeiro número:'));
    let numero2 = parseInt(prompt('Digite o segundo número:'));
    let soma = numero1 + numero2;
    alert(`O resultado  da soma dos dois números: ${soma}.`);
 };


 //Functions
 //1ª Criar uma função que exibe "Olá, mundo!" no console.
 
 function exibirMensagem(){
    console.log('Olá, mundo!')
 };
 exibirMensagem();

 //2ª Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
 function recebeNome(nome){
    console.log(`Olá, ${nome}!.`);
 };
 recebeNome("Rodrigo");

 //3ª Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
    function dobrarNumero(numero){
        return numero * 2;
    };
//Exemplo de uso:
let resultadoDobro = dobrarNumero(5);
console.log("O dobro é: ", resultadoDobro);


//4ª Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calcularMedia(a, b, c){
    return (a + b + c)/3;
};
//Exemplo de uso:
const media = calcularMedia(7,8,9);
console.log("A média é: ", media);

//5ª Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function encontrarMaior(a, b) {
  return a > b ? a : b;
}

let maiorNumero = encontrarMaior(15, 9);
console.log(maiorNumero);

//6ª Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.
function quadrado(numero) {
  return numero * numero;
}

let resultado = quadrado(2);
console.log(resultado); 
