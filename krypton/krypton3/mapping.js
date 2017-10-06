const fs = require('fs');

/*
* Performs mapping of alphabet1 -> alphabet2 on the inputed text.
* Eg. converts all V's to C's, for each letter of the alphabets.
* */

const input = fs.readFileSync('./input', 'utf8');
// const input = "ABCDEDEABAAA";

const srcAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const tarAlphabet = 'boihgknqvtwyurxPaRemsldfpc';

let input1 = input + '';
for(let i = 0; i < 26; i++) {
  const srcChar = srcAlphabet[i];
  const tarChar = tarAlphabet[i];
  input1 = input1.replace(new RegExp(srcChar, 'g'), tarChar);
}

console.log(input1);