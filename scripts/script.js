function display(number) {
  if (number[11] !== undefined) {
    document.querySelector(".display").textContent = "NaN";
    number = [];
  } else {
    document.querySelector(".display").textContent = number.join("");
  }
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
    console.log(number1);
    if (symbol.className !== "item signs" && sign === "") {
      console.log(symbol.className);
      number1[index1] = symbol.textContent;
      display(number1);
      index1++;
    }
    //checking if pushed symbol is not number and number1 array is full. We expecting sign
    if (symbol.className !== "item numbers" && number1.length !== 0) {
      console.log(symbol.className);
      sign = symbol.textContent;
      console.log(sign);
    }
    //checking if pushed is number, and sign should be not empty, number1 should have entries. Fill number2 array
    if (symbol.className !== "item signs" && sign !== "" && number1.length !== 0) {
      console.log(symbol.className);
      number2[index2] = symbol.textContent;
      display(number2);
      index2++;
    }
  });
});


