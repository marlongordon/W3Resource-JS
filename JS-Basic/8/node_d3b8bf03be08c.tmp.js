let randomNum = Math.round(Math.random() * 10);

console.log(randomNum);

const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Por fazer, digite um numero: ", (valor) => {
  console.log(`Você inseriu o valor ${valor}`);
  r1.close();
});
