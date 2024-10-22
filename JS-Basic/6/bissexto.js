function bissexto(ano) {
  let res; // Declarei a variável antes de atribuir um valor a ela

  if (ano % 400 === 0) {
    res = "O ano é bissexto"; // Atribui um valor a uma variavel já declarada
  } else if (ano % 100 === 0) {
    res = "O ano não é bissexto";
  } else if (ano % 4 === 0) {
    res = "O ano é bissexto";
  } else {
    res = "O ano não é bissexto";
  }

  console.log(res);
}

bissexto(1997);
bissexto(2027);
bissexto(2025);
bissexto(1990);
bissexto(2024);
