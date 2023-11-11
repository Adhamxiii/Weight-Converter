"use strict";

const inputEl = document.getElementById("input");
const resultEl = document.getElementById("result");
const errorEl = document.getElementById("error");

let errorTime, resultTime;

const updateResult = () => {
  if (inputEl.value <= 0 || isNaN(parseFloat(inputEl.value))) {
    errorEl.textContent = "Please enter a valid positive number!";
    clearTimeout(errorTime);
    errorTime = setTimeout(() => {
      errorEl.textContent = "";
      inputEl.value = "";
    }, 2000);
    resultEl.textContent = "";
  } else {
    resultEl.textContent = (parseFloat(inputEl.value) / 2.2).toFixed(2);
    clearTimeout(resultTime);
    resultTime = setTimeout(() => {
      resultEl.textContent = "";
      inputEl.value = "";
    }, 10000);
    errorEl.textContent = "";
  }
};

inputEl.addEventListener("input", updateResult);
