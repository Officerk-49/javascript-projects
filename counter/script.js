const buttons = document.querySelectorAll('button');
const count = document.querySelector('#count');

const counter = {
   value: Number(count.textContent),
   increaseCount() {
      this.value += 1;
      count.textContent = this.value;
   },

   decreaseCount() {
      this.value -= 1;
      count.textContent = this.value;
   },

   resetCount() {
      this.value = 0;
      count.textContent = this.value;
   },

   countColor() {
      if (this.value > 0) {
         count.style.color = '#20a92bff';
      } else if (this.value < 0) {
         count.style.color = '#a73d3dff';
      } else {
         count.style.color = 'black';
      }
   }
};

buttons.forEach(btn => {
   btn.addEventListener('click', (e)=> {
      const target = e.currentTarget.getAttribute('id');
      if (target === 'increase') {
         counter.increaseCount();
         counter.countColor();
      } else if (target === 'decrease') {
         counter.decreaseCount();
         counter.countColor();
      } else {
         counter.resetCount();
         counter.countColor();
      }
   });
});
