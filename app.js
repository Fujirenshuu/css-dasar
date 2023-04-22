const generateColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
};

const buttons = document.querySelectorAll("button");
const h1 = document.querySelectorAll("h1");

for (let button of buttons) {
  button.addEventListener("click", colorfulDreamsColorfulSmiles);
}

for (let eijwan of h1) {
  eijwan.addEventListener("click", colorfulDreamsColorfulSmiles);
}

function colorfulDreamsColorfulSmiles() {
  this.style.backgroundColor = generateColor();
  this.style.color = generateColor();
}
