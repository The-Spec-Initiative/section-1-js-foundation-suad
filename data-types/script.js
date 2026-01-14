"use strict";

const inputAge = document.querySelector(".age");
const inputAmt = document.querySelector(".amount");
const msg = document.querySelector(".message");
const loggedIn = document.getElementById("loggedIn");
const form = document.querySelector("form");

// console.log(loggedIn);

let total;
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const amt = +inputAmt.value;

  if (inputAge.value >= 18 && loggedIn.checked) {
    const discount = 0.1;

    total = amt * discount;

    msg.textContent = "A 10% discount was applied, here is your total " + total;
  } else {
    total = amt;

    msg.textContent = "Your total is " + total;
  }
});
