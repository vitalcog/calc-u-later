
let display = document.getElementById('display');


// numBut is now an array of 10, its index is 0 - 9 /////
let numBut = document.getElementsByClassName('number');
// numBut is now an array of 10, its index is 0 - 9 /////


// funBut is now an array of 7, its index is 0-6 /////
let funBut = document.getElementsByClassName('function');
// funBut is now an array of 7, its index is 0-6 /////


let storeMath = [];

let mathNum = [];

let mathFunc = [];

function multiply(a, b){
  return a * b;
}

function divide(a,b){
  return a / b;
}

function add(a,b){
  return a + b;
}

function subtract(a,b){
  return a - b;
}

// - This loop creates click event for numbers -----
for (let i = 0; i < numBut.length; i++){
  numBut[i].addEventListener('click', function() {

// - This limits the display content so it fits the screen -----
    if (display.textContent.length < 8){
// - This limits the display content so it fits the screen -----

      display.textContent += numBut[i].innerHTML;
      storeMath.push(numBut[i].innerHTML);
    }
  });
}


// - This loop creates click event for function buttons -----
for (let i = 0; i < funBut.length; i++){

  funBut[i].addEventListener('click', function() {

  if (funBut[i].innerHTML === "C"){
      display.textContent = "";
      storeMath = [];
      mathNum = [];
      mathFunc = [];
  }


// - This is the meat of the non-sense, the equals button -----
  if (funBut[i].innerHTML === "="){
    let number = '';
    for (let i = 0; i < storeMath.length; i++){

      if (storeMath[i] === "*"){
        mathNum.push(number);
        mathFunc.push(multiply);
        number = '';

      } else if (storeMath[i] === "/"){
        mathNum.push(number);
        mathFunc.push(divide);
        number = '';

      } else if (storeMath[i] === "+"){
        mathNum.push(number);
        mathFunc.push(add);
        number = '';

      } else if (storeMath[i] === "-"){
        mathNum.push(number);
        mathFunc.push(subtract);
        number = '';

      } else {
        number += storeMath[i];
      }
    }
    mathNum.push(number);

    for (let i = 0; i < mathFunc.length; i++){

      if (mathFunc[i] === multiply){
        mathNum.unshift(multiply(parseFloat(mathNum.shift()), parseFloat(mathNum.shift())));

      } else if (mathFunc[i] === divide){
        mathNum.unshift(divide(parseFloat(mathNum.shift()), parseFloat(mathNum.shift())));

      } else if (mathFunc[i] === add){
        mathNum.unshift(add(parseFloat(mathNum.shift()), parseFloat(mathNum.shift())));
        
      } else if (mathFunc[i] === subtract){
        mathNum.unshift(subtract(parseFloat(mathNum.shift()), parseFloat(mathNum.shift())));
      }
    }
    display.textContent = mathNum[0];
  }
// - This is the end of the non-sense, the equals button -----



// - This limits the display content so it fits the screen -----
  if (display.textContent.length < 8){
// - This limits the display content so it fits the screen -----


  if (funBut[i].innerHTML === "X"){
        display.textContent += "*";
        storeMath.push("*");

    } else if (funBut[i].innerHTML === "/"){
        display.textContent += "/";
        storeMath.push(funBut[i].innerHTML);

    } else if (funBut[i].innerHTML === "+"){
        display.textContent += "+";
        storeMath.push(funBut[i].innerHTML);

    } else if (funBut[i].innerHTML === "-"){
        display.textContent += "-";
        storeMath.push(funBut[i].innerHTML);

    } else if (funBut[i].innerHTML === "."){
        display.textContent += ".";
        storeMath.push(funBut[i].innerHTML);

  }
}
});
}
