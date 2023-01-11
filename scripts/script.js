function display(number) {
  //This function shows entries in web page display "<div>"
  if (number[11] !== undefined) {
    document.querySelector(".display").textContent = "NaN";
  } else {
    document.querySelector(".display").textContent = number.join("");
  }
}

function operate(firstNum, operator, secondNum) {
  //Decides which math action should be taken and return result
  if (operator === "+") {
    number1 = Array.from(String(add(firstNum, secondNum)));
    return number1, (number2.length = 0), (index2 = 0);
  }
  if (operator === "-") {
    number1 = Array.from(String(subtract(firstNum, secondNum)));
    return number1, (number2.length = 0), (index2 = 0);
  }
  if (operator === "x") {
    number1 = Array.from(String(multiple(firstNum, secondNum)));
    return number1, (number2.length = 0), (index2 = 0);
  }
  if (operator === "/" && secondNum !== 0) {
    number1 = Array.from(String(divide(firstNum, secondNum)));
    return number1, (number2.length = 0), (index2 = 0);
  }
  if (operator === "/" && secondNum === 0) {
    return (number1 = ["E", "r", "r", "o", "r"]), (number2.length = 0), (index2 = 0), (index1 = 0);
  }
}

function add(firstNum, secondNum) {
  //add two numbers
  return Math.round((firstNum + secondNum + Number.EPSILON) * 10000000000) / 10000000000;
}

function subtract(firstNum, secondNum) {
  //subtract two numbers
  return Math.round((firstNum - secondNum + Number.EPSILON) * 10000000000) / 10000000000;
}

function multiple(firstNum, secondNum) {
  //subtract two numbers
  return Math.round((firstNum * secondNum + Number.EPSILON) * 10000000000) / 10000000000;
}

function divide(firstNum, secondNum) {
  //divide two numbers
  return Math.round((firstNum / secondNum + Number.EPSILON) * 10000000000) / 10000000000;
}

let number1 = [];
let number2 = [];
let index1 = 0;
let index2 = 0;
let sign = "";

const symbols = document.querySelectorAll(".item");
symbols.forEach((symbol) => {
  // and for each one we add a 'click' listener
  symbol.addEventListener("click", () => {
    //checking if pushed is number, and sign should be empty. Fill number1 array
    if (
      symbol.className !== "item signs" &&
      symbol.className !== "item special" &&
      symbol.id !== "equal" &&
      sign === ""
    ) {
      number1[index1] = symbol.textContent;
      display(number1);
      index1++;
    }
    //checking if pushed symbol is not number and number1 array is full. We expecting sign
    if (
      symbol.className !== "item numbers" &&
      symbol.className !== "item special" &&
      symbol.id !== "equal" &&
      number1.length !== 0 &&
      number2.length === 0
    ) {
      sign = symbol.textContent;
    }
    //checking if pushed is number, and sign should be not empty, number1 should have entries. Fill number2 array
    if (
      symbol.className !== "item signs" &&
      symbol.className !== "item special" &&
      symbol.id !== "equal" &&
      sign !== "" &&
      number1.length !== 0
    ) {
      number2[index2] = symbol.textContent;
      display(number2);
      index2++;
    }
    //checking if pushed is not number and not '=', number1 should have entries, number2 should have entries
    if (
      symbol.className !== "item numbers" &&
      symbol.className !== "item special" &&
      symbol.id !== "equal" &&
      number1.length !== 0 &&
      number2.length !== 0
    ) {
      let int1 = parseFloat(number1.join(""));
      let int2 = parseFloat(number2.join(""));
      operate(int1, sign, int2);
      console.log(number1);
      display(number1);
    }
    //checking if pushed is '=', number1 should have entries, number2 should have entries
    if (symbol.id === "equal" && number1.length !== 0 && number2.length !== 0) {
      let int1 = parseFloat(number1.join(""));
      let int2 = parseFloat(number2.join(""));
      operate(int1, sign, int2);
      console.log(number1);
      display(number1);
    }
    //checking if sing button is pushed and if sign has value. Sign gets newly pushed value
    if (symbol.className === "item signs" && sign !== "") {
      sign = symbol.textContent;
    }
    //checking if 'AC' is pushed, clear all values
    if (symbol.id === "AC") {
      number1.length = 0;
      number2.length = 0;
      index1 = 0;
      index2 = 0;
      sign = "";
      document.querySelector(".display").textContent = "0";
    }
    //checks if percent button pushed, it's take number1 to proceed
    if (symbol.id === "percent" && number1.length !== 0) {
      let int1 = parseFloat(number1.join(""));
      let result = Math.round((int1 / 100 + Number.EPSILON) * 10000000000) / 10000000000;
      number1 = Array.from(String(result));
      display(number1);
    }
   //checks if percent button pushed, it's take number2 to proceed
   if (symbol.id === "percent" && number2.length !== 0) {
    number1.length = 0;
    number2.length = 0;
    index1 = 0;
    index2 = 0;
    sign = "";
    document.querySelector(".display").textContent = "NotAllowed";
  }
    //checks if +/- button pushed, proceed with number1
    if (
      symbol.id === "plus-minus" &&
      number1.length !== 0 &&
      number1[0] !== "-" &&
      number2.length === 0
    ) {
      number1.unshift("-");
      display(number1);
      return;
    }
    //checks if +/- button pushed, and number1 is negative
    if (
      symbol.id === "plus-minus" &&
      number1.length !== 0 &&
      number1[0] === "-" &&
      number2.length === 0
    ) {
      number1.shift();
      display(number1);
    }
    //checks if +/- button pushed, proceed with number2
    if (symbol.id === "plus-minus" && number2.length !== 0 && number2[0] !== "-") {
      number2.unshift("-");
      display(number2);
      return;
    }
    //checks if +/- button pushed, and number2 is negative
    if (symbol.id === "plus-minus" && number2.length !== 0 && number2[0] === "-") {
      number2.shift();
      display(number2);
    }
  });
});
