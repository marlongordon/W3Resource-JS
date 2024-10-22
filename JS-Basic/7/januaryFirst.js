function janeiro() {
  for (let ano = 2014; ano <= 2050; ano++) {
    let data = new Date(ano, 0, 1); // Primeiro número dentro do parênteses: Ano; Segundo nº: Mês; Terceiro nº: Dia

    if (data.getDay() === 0) {
      console.log(`1º de Janeiro de ${ano} será domingo.`);
    }
  }
}

janeiro();
