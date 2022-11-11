const firstInput = document.querySelector(".input_subject_1");
let firstInputValue;

firstInput.addEventListener("change", (event) => {
  firstInputValue = event.currentTarget.value;
});

const secondInput = document.querySelector(".input_subject_2");
let secondInputValue;

secondInput.addEventListener("change", (event) => {
  secondInputValue = event.currentTarget.value;
});

const thirdInput = document.querySelector(".input_subject_3");
let thirdInputValue;

thirdInput.addEventListener("change", (event) => {
  thirdInputValue = event.currentTarget.value;
});

const buttonResult = document.querySelector(".button_calc");
const averageResult = document.querySelector(".result");

buttonResult.addEventListener("click", () => {
  let sumNote =
    Number(firstInputValue) +
    Number(secondInputValue) +
    Number(thirdInputValue);

  let schoolAverage = sumNote / 3;

  if (schoolAverage === 10) {
    averageResult.innerHTML = "Aprovado com distinção";
    averageResult.style.background = "green";
    averageResult.style.color = "white";
  } else if (schoolAverage >= 7) {
    averageResult.innerHTML = "Aprovado";
    averageResult.style.background = "green";
    averageResult.style.color = "white";
  } else {
    averageResult.innerHTML = "Reprovado";
    averageResult.style.background = "yellow";
    averageResult.style.color = "black";
  }
});
