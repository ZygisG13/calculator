function display(number) {
  //This function shows entries in web page display "<div>"
  if (number[11] !== undefined) {
    document.querySelector(".display").textContent = "NaN";
    number = [];
  } else {
    document.querySelector(".display").textContent = number.join("");
  }
}

function operate(firstNum, operator, secondNum) {
  //Decides which math action should be taken and return result
  if (operator === "+") {
    number1 = Array.from(String(add(firstNum, secondNum)));
    display(number1);
    return number1, (number2 = []);
  }
  if (operator === "-") {
    display(subtract(firstNum, secondNum));
    return subtract(firstNum, secondNum);
  }
  if (operator === "x") {
    display(multiple(firstNum, secondNum));
    return multiple(firstNum, secondNum);
  }
  if (operator === "x") {
    display(multiple(firstNum, secondNum));
    return multiple(firstNum, secondNum);
  }
  if (operator === "/") {
    display(divide(firstNum, secondNum));
    return divide(firstNum, secondNum);
  }
}

function add(firstNum, secondNum) {
  return firstNum + secondNum;
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
    if (symbol.className !== "item signs" && sign === "") {
      number1[index1] = symbol.textContent;
      display(number1);
      index1++;
    }
    //checking if pushed symbol is not number and number1 array is full. We expecting sign
    if (symbol.className !== "item numbers" && number1.length !== 0) {
      sign = symbol.textContent;
    }
    //checking if pushed is number, and sign should be not empty, number1 should have entries. Fill number2 array
    if (symbol.className !== "item signs" && sign !== "" && number1.length !== 0) {
      number2[index2] = symbol.textContent;
      display(number2);
      index2++;
    }
    //checking if pushed is number, and sign should be not empty, number1 should have entries. Fill number2 array
    if (symbol.className !== "item numbers" && number1.length !== 0 && number2.length !== 0) {
      let int1 = parseFloat(number1.join(""));
      let int2 = parseFloat(number2.join(""));
      operate(int1, sign, int2);
    }
    //checking if '=' is pushed, and sign should be not empty, number1 should have entries. Fill number2 array
    if (symbol.className === "item equal" && number1.length !== 0 && number2.length !== 0) {
      let int1 = parseFloat(number1.join(""));
      let int2 = parseFloat(number2.join(""));
      operate(int1, sign, int2);
    }
  });
});
