//1ª Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro:

 function calcularIMC(peso, altura) {
      const imc = peso / (altura * altura);
      return imc.toFixed(2); // arredonda para 2 casas decimais
    }

    // Exemplo de uso:
    const peso = 70;     // em kg
    const altura = 1.75; // em metros
    const resultado = calcularIMC(peso, altura);

    console.log(`Seu IMC é ${resultado}`);

    //2ª Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
    function calcularFatorial(n) {
      if (n < 0) {
        return "Não existe fatorial de número negativo!";
      }

      let resultado = 1;
      for (let i = 1; i <= n; i++) {
        resultado *= i;
      }

      return resultado;
    }

    // Exemplo de uso:
    const numero = 5;
    console.log(`O fatorial de ${numero} é ${calcularFatorial(numero)}`);

    //3ª Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor 
    // equivalente em reais. Para isso, considere a cotação do dólar igual a R$ 4,80.
     function converterDolarParaReal(valorEmDolar) {
      const cotacao = 4.80;
      const valorEmReais = valorEmDolar * cotacao;
      return valorEmReais.toFixed(2); // arredonda para 2 casas decimais
    }

    // Exemplo de uso:
    const valor = 10; // 10 dólares
    const convertido = converterDolarParaReal(valor);
    console.log(`US$${valor} equivalem a R$${convertido}`);

    //4ª Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando
    //  altura e largura que serão dadas como parâmetro.
     function calcularSala(altura, largura) {
      const area = altura * largura;
      const perimetro = 2 * (altura + largura);

      console.log(`Área da sala: ${area} m²`);
      console.log(`Perímetro da sala: ${perimetro} m`);
    }

    // Exemplo de uso:
    calcularSala(3, 5); // altura = 3m, largura = 5m


    //5ª Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando
    //  seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
    function calcularSalaCircular(raio) {
      const pi = 3.14;
      const area = pi * raio * raio;            // Área = π * r²
      const perimetro = 2 * pi * raio;          // Perímetro = 2 * π * r

      console.log(`Área da sala: ${area.toFixed(2)} m²`);
      console.log(`Perímetro da sala: ${perimetro.toFixed(2)} m`);
    }

    // Exemplo de uso:
    calcularSalaCircular(4); // raio = 4 metros


   //6ª Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
    function mostrarTabuada(numero) {
      console.log(`Tabuada do ${numero}:`);
      for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
      }
    }

    // Exemplo de uso:
    mostrarTabuada(7);
