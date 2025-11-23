const layout = document.querySelector('#layout');
const backgroundColor = document.querySelector('#back-clr');
const colorSquare = document.querySelector('#clr-square');
const colorValue = document.querySelector('#clr-value');
const colorButton = document.querySelector('#clr-btn');

const colorFlipper = {
   elements: [layout, colorButton, colorSquare],

   colorGenerator() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
   },

   applyColor(color) {
      this.elements.forEach(el => {
         el.style.backgroundColor = color;
      })
   }
}

colorButton.addEventListener('click', ()=> {
   const randomColor = colorFlipper.colorGenerator();
   colorFlipper.applyColor(randomColor);
   colorValue.textContent = randomColor;
});
