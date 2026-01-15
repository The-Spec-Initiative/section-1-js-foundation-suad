# Operators

Created an array of objects and filtered out the products which are in stock

# How it works

```js
const products = [
  ["orange", 100],
  ["banana", 2],
  ["mango", 0],
  ["rice", 0],
];

const productsInStock = products.filter((arr) => arr[1] > 1);
```

we looped through the products array and took each array element and check the second element of that array to see if its higher than 1, if so then a new array will be created and stored in the productsInStock array, but if it doesn't meet the condition, such arraay woun't be included in the new array

# Technologies

- Javascript
- HTML
