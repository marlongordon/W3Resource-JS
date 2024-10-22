let n1 = document.getElementById("1stNumber");
let n2 = document.getElementById("2ndNumber");

let res = document.querySelector("div#res");

function multiplicar() {
  let num1 = Number(n1.value);
  let num2 = Number(n2.value);
  let mult = num1 * num2;
  res.innerHTML = `The Result Is: <br> ${mult}`;
}

function dividir() {
  let num1 = Number(n1.value);
  let num2 = Number(n2.value);
  let divid = num1 / num2;
  res.innerHTML = `The Result Is: <br> ${divid}`;
}
