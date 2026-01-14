# Operators

Created a discount checker

# How it works

- User checks box if they are logged in or not
- user enter amount and their age
- user submits after inputing their data and the logic is being run
- the code checks if their above or equal to 18 and if they're logged in
- a 10% is applied to their amount
- a message is displayed to them to see their final value
- if the conditionn fails, their total is their final value

# Technologies

- Javascript
- HTML

## Discount checker logic

```js
const inputAge = document.querySelector(".age"):  'used to select an html element with a class name of age'

form.addEventListener("submit", (e) => {
  e.preventDefault();}) : 'here we added an event listener to the form element which listens for a submit event after pressing the button or hitting enter. and the next line is used to prevent the browser from reloading after submitting the form'

  const amt = +inputAmt.value; : 'used to convert the value gotten from the input field to a number'

  if (inputAge.value >= 18 && loggedIn.checked) { : 'we check the conditions here'

    const discount = 0.1;

    total = amt * discount; : 'calculation happens here'

    msg.textContent = "A 10% discount was applied, here is your total " + total;
  }
```
