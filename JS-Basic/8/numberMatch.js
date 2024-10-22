function numMatch() { // Criei a função numMatch
  // Declarei uma variável que gera um número inteiro aleatório de 1 até 10
  let randomNum = Math.round(Math.random() * 10); 

  // Importa o módulo 'readline' para permitir a entrada do usuário
  const readline = require("readline");

  // Cria uma interface para leitura de dados do console
  const r1 = readline.createInterface({
    input: process.stdin, // A entrada será do terminal
    output: process.stdout, // A saída será mostrada no terminal
  });

  // Pergunta ao usuário por um número e aguarda a resposta
  r1.question("Por favor, digite um numero: ", (userNum) => {
    // Mostra o número gerado aleatoriamente no console
    console.log(`O valor gerado foi ${randomNum}`)
    // Mostra o número que o usuário inseriu no console
    console.log(`Você inseriu o valor ${userNum}`);

    // Converte a entrada do usuário para um número inteiro
    userNum = parseInt(userNum, 10); // O segundo parâmetro (10) indica que estamos usando a base decimal

    // Compara o número aleatório com o número inserido pelo usuário
    if (randomNum === userNum) {
      console.log("Matched"); // Se forem iguais, exibe "Matched"
    } else {
      console.log("Not matched"); // Caso contrário, exibe "Not matched"
    }

    // Fecha a interface de leitura
    r1.close();
  });
}

// Chama a função numMatch para executar o programa
numMatch();

