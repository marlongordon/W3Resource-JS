// Consegue o dia e hora atuais.
var data = new Date();

// Consegue o número exato do dia (0 se for domingo, 6 se for sábado, etc)
var dia = data.getDay();

// Consegue a hora exata
var hora = data.getHours();

// Consegue os minutos exatos
var minuto = data.getMinutes();

// Consegue os segundos exatos
var segundo = data.getSeconds();

// Acrescenta um 0 na frente da hora, minuto ou segundo se o mesmo não possuir dois digitos
hora = String(hora).padStart(2, "0");
minuto = String(minuto).padStart(2, "0");
segundo = String(segundo).padStart(2, "0");

// Determina o turno do dia
if (hora >= 0 && hora < 6) {
  var ampm = "Madrugada";
} else if (hora >= 6 && hora < 12) {
  var ampm = "Manhã";
} else if (hora >= 12 && hora < 18) {
  var ampm = "Tarde";
} else if (hora >= 18 && hora < 24) {
  var ampm = "Noite";
}

/*
if (hora >= 12) {
    hora = hora - 12
} else {
    hora = hora
}
*/

// Função para mostrar o nome do dia da semana, ao invés do número do dia (0-6)
function mostrarDiaDaSemana() {
  const diasDaSemana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  const diaDaSemana = diasDaSemana[dia];

  console.log(`Hoje é: ${diaDaSemana}`);
}

mostrarDiaDaSemana();

console.log(`Agora são ${hora}:${minuto}:${segundo} da ${ampm}`);
