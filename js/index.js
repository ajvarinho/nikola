console.log("djesba");

//dark mode
const switchMode = document.getElementById('switch-mode')

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  // dark mode
  switchMode.checked = true;
} else {
  //
  switchMode.checked = false;
}


switchMode.addEventListener('change', ()=>{
  console.log('alo')
})

const a11yBtn = document.getElementById('a11y-menu')
const a11yCloseBtn = document.getElementById('close-a11y')
const accessibilityWrap = document.querySelector('.a11y-menu')
//
const letterSpacing = document.getElementById('letter-spacing')

a11yBtn.addEventListener('click', ()=>{
  accessibilityWrap.classList.add('active');
  a11yBtn.setAttribute('aria-expanded', 'true');
})

a11yCloseBtn.addEventListener('click', ()=>{
  accessibilityWrap.classList.remove('active');
  a11yBtn.setAttribute('aria-expanded', 'false');
})

// text elements 
let textElements

let currentLocation = window.location.pathname;

function setFontSize(arr, string){
  arr.forEach(element => {
    element.setAttribute('class', '')
    element.classList.add('font-'+ `${string}`)
  });
}

function setLetterSpacing(arr, string){
  let spacingValue
  if(string.length === 1){
    spacingValue = Number(string)
  }
  arr.forEach(element => {
    element.style.letterSpacing = spacingValue + 'px'
  })
}

const smallFont = document.getElementById('small');
const defaultFont = document.getElementById('default');
const largeFont =  document.getElementById('large');

accessibilityWrap.addEventListener('change', (e)=>{
  console.log('test click', e.target, e.target.value, typeof e.target.value)
  let selectedValue = e.target.value
  if(e.target.type ==='radio') {
    setFontSize(textElements, selectedValue)
  } else {
    setLetterSpacing(textElements, selectedValue)
  }
  e.preventDefault()
})

setTimeout(() => {
  accessibilityWrap.classList.remove('hidden');
  textElements = document.querySelectorAll('.content-wrap p');
}, 1000);

//reselect text elements if 'route' has changed

document.addEventListener("click", (e) => {
  const { target } = e;
  if (!target.matches("nav a")) {
      return;
  }
  if(target.href !== '/'){
    //
    //mozda tu animacija
    //
    setTimeout(() => {
      textElements = document.querySelectorAll('.content-wrap p');
    }, 1000);
  }
});




//

var i;
var fib = [0, 1]; // Initialize array!

// const svgWrap = document.querySelector('.svg-wrap')
// const fibonacciTest = svgWrap.querySelector('.fibonacci'); 
// let fibonacciArr = []

//
let pathPointsTest 
// = `m ${imgWrapLeft + 100},${
//   imgWrapTop - 50
// } l 175,0 l 0,175 l -175,0 z`;
// //
// pathEl.setAttribute("d", pathPointsTest);

// for (i = 2; i <= 10; i++) {
//   // Next fibonacci number = previous + one before previous
//   // Translated to JavaScript:
//   console.log('check', fib[i-2])
//   fib[i] = fib[i - 2] + fib[i - 1];
//   //
//   fibonacciArr.push(fib[i-2], fib[i])
//   console.log(fib[i], fibonacciArr);
// }

// let number
// function returnNums(number){
//   return number;
// }

// for (i = 1; i <= fibonacciArr.length; i++){
//   returnNums(fibonacciArr[i]);
// }

// console.log('number', number)

// let check = fibonacciTest.getAttribute('d');
// console.log(check, typeof check);
// console.log(fibonacciArr[i]);
// let proba = check + ' ' + `${fibonacciArr[i]} ${fibonacciArr[i]}`;
// console.log(proba, 'proba');
