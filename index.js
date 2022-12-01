const numOne = document.querySelector("#num1");
const numTwo = document.querySelector("#num2");
const add = document.querySelector("#add");
const sub = document.querySelector("#sub");
const mul = document.querySelector("#mul");
const div = document.querySelector("#div");
const ans = document.querySelector("#ans");


function addition(){
  var number1 = Number(num1.value);
  var number2 = Number(num2.value);
  var result = 0;
  result = number1 + number2;
  ans.innerHTML = result;

}
function subtraction(){
  var number1 = Number(num1.value);
  var number2 = Number(num2.value);
  var result = 0;
  result = number1 - number2;
  ans.innerHTML = result;

}
function multiply(){
  var number1 = Number(num1.value);
  var number2 = Number(num2.value);
  var result = 0;
  result = number1 * number2;
  ans.innerHTML = result;

}
function divide (){
  var number1 = Number(num1.value);
  var number2 = Number(num2.value);
  var result = 0;
  result = number1 / number2;
  ans.innerHTML = result;

}


add.addEventListener("click", addition);
sub.addEventListener("click", subtraction);
mul.addEventListener("click", multiply);
div.addEventListener("click", divide );