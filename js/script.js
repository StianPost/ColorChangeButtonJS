const btn = document.querySelector('#colorBtn');
const bGC = document.querySelector('body');
const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const value = document.querySelector('#hexValue');

btn.onclick = function () {
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    const clrValue = Math.floor(Math.random() * hexValues.length);
    hex += hexValues[clrValue];
  }
  value.textContent = hex;
  bGC.style.backgroundColor = hex;
};
