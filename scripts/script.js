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
let index = 0;

const signs = document.querySelectorAll(".item");
signs.forEach((sign) => {
  // and for each one we add a 'click' listener
  sign.addEventListener("click", () => {
    if (sign.className !== "item signs" || number1 === []) {
      console.log(sign.className);
      number1[index] = sign.textContent;
      display(number1);
      index++;
    } else {
    }
  });
});

/*signs.forEach((sign) => {
  // and for each one we add a 'click' listener
  sign.addEventListener("click", () => {
    console.log(sign.textContent);
  });
});*/
