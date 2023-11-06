
// import sum from './sum.js';                         //vienas pvz
// import { sum } from './sum.js';                     //antras pvz
import { sum, minus, div, multi } from './sum.js';     //treicias pvz

console.log('labas');

const n1 = 7;
const n2 = 5;

const n12 = sum(n1, n2);
const n12minus = minus(n1, n2);
const n12div = div(n1, n2);
const n12multi = multi(n1, n2);

console.log(n12);
console.log(n12minus);
console.log(n12div);
console.log(n12multi);