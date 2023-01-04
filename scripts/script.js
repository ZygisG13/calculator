function display(number) {
  const show = document.querySelector(".display").textContent = number;
  
}



const numbers = document.querySelectorAll(".item.numbers");

numbers.forEach((number) => {
  // and for each one we add a 'click' listener
  number.addEventListener("click", () => {
    display(number.textContent);
  });
});

const signs = document.querySelectorAll(".item.signs");

signs.forEach((sign) => {
  // and for each one we add a 'click' listener
  sign.addEventListener("click", () => {
    console.log(sign.textContent);
  });
});