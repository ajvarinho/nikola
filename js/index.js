console.log("djesba");

const openAccessibilityMenu = document.getElementById('a11y-menu')
const accessibilityWrap = document.querySelector('.a11y-menu')

openAccessibilityMenu.addEventListener('click', ()=>{
  console.log('alo')
  accessibilityWrap.classList.toggle('active')
})



const smallFont = document.getElementById('small')

smallFont.addEventListener('change', ()=>{
  console.log('change')
})

var i;
var fib = [0, 1]; // Initialize array!

for (i = 2; i <= 10; i++) {
  // Next fibonacci number = previous + one before previous
  // Translated to JavaScript:
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}