var data = new Date();
var dia = data.getDate();
var mes = data.getMonth() + 1;
var ano = data.getFullYear();

dia = String(dia).padStart(2, "0");
mes = String(mes).padStart(2, "0");

console.log(`${mes}-${dia}-${ano}`);
console.log(`${mes}/${dia}/${ano}`);
console.log(`${dia}-${mes}-${ano}`);
console.log(`${dia}/${mes}/${ano}`);
