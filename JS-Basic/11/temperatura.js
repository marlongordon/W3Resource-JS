function converFar() {
  let cel = Number(document.getElementById("celfar").value);
  let resCelsius = document.querySelector("div#resCelsius");
  let coFar = (cel * 9) / 5 + 32;
  resCelsius.innerHTML = `${cel}ºC é ${coFar}ºF`;
}

function converCel() {
  let far = Number(document.getElementById("farcel").value);
  let resFarenheit = document.querySelector("div#resFarenheit");
  let coCel = (far - 32) / 1.8;
  resFarenheit.innerHTML = `${far}ºF é ${coCel.toFixed(2)}ºC`;
}
