const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// const fs = require('fs');
// const input = fs.readFileSync('../krypton4/idx_0', 'utf8');
// bruteForceRotate(input);

// Given a text, tries all 26 caesar rotations on it.
function bruteForceRotate(text) {
  for(let i = 0; i < 26; i++) {
    console.log(`${i}:`);
    console.log(`${rotateText(text, i)}`);
  }
}

// Basic caesar rotation of some text.
function rotateText(text, offset) {
  const chars = text.split('');
  let rotatedText = '';
  for(let i = 0; i < chars.length; i++) {
    const char = chars[i];
    rotatedText += rotateChar(char, offset);
  }
  return rotatedText;
}

// Caesar rotation of a single char.
function rotateChar(char, offset) {
  if(offset < 0) offset = 26 + offset;
  const idx = alphabet.indexOf(char);
  if(idx === -1) return char;
  const trIdx = (idx + offset) % 26;
  return alphabet.substr(trIdx, 1);
}

module.exports = {
  rotateText
};