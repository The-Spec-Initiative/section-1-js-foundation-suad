"use strict";

const products = [
  ["orange", 100],
  ["banana", 2],
  ["mango", 0],
  ["rice", 0],
];

const productsInStock = products.filter((arr) => arr[1] > 1);
console.log(productsInStock);
