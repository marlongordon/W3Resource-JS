let data = new Date();
let xmas = new Date(data.getFullYear(), 11, 25);

if (data.getMonth() == 11 && data.getDate() > 25) {
  xmas.setFullYear(xmas.getFullYear() + 1);
}

let daysLeft = (xmas - data) / (1000 * 60 * 60 * 24);

console.log(`Faltam ${Math.ceil(daysLeft)} dias até o Natal!`);
