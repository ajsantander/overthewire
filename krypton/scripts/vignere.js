const fs = require('fs');
const rotateTool = require('./rotate');

/*
* Extracts nth letters from input to different outputs considering:
* - A key length: eg. 6 produces 6 different outputs
* - Idx 0 will extract every 6 letters with an offset of 0
* - Idx 1 will extract every 6 letters with an offset of 1... etc
* */

const KEY_LENGTH = 6;

const input = fs.readFileSync('../krypton4/krypton5', 'utf8')
  .replace(new RegExp(' ', 'g'), '');

const components = decompose(input);
components[0] = rotateTool.rotateText(components[0], 26 - 5);  // E, V
components[1] = rotateTool.rotateText(components[1], 26 - 17); // R, J
components[2] = rotateTool.rotateText(components[2], 26 - 4);  // D, W
components[3] = rotateTool.rotateText(components[3], 26 - 10); // K, Q
components[4] = rotateTool.rotateText(components[4], 26 - 4);  // D, W
components[5] = rotateTool.rotateText(components[5], 26 - 24); // Y, C
const output = compose(components);
console.log(output);

function compose(components) {

  let comp = '';

  // Prepare outputs.
  const offsets = [];
  let numChars = 0;
  for(let i = 0; i < components.length; i++) {
    offsets[i] = 0;
    numChars += components[i].length;
  }

  // Sweep original text.
  for(let i = 0; i < numChars; i++) {
    const componentIdx = i % KEY_LENGTH;
    const componentOffset = offsets[componentIdx];
    const component = components[componentIdx];
    comp += component.substr(componentOffset, 1);
    offsets[componentIdx] += 1;
  }

  return comp;
}

function decompose(text) {

  // Prepare outputs.
  const outputs = [];
  for(let i = 0; i < KEY_LENGTH; i++) {
    outputs[i] = '';
  }

  // Sweep text by char and dump into corresponding output.
  let idx = 0;
  text.split('').forEach(function(char) {
    outputs[idx] += char;
    idx = idx + 1 < KEY_LENGTH ? idx + 1 : 0;
  });

  // for(let i = 0; i < KEY_LENGTH; i++) {
  //   console.log(i + ':');
  //   console.log(outputs[i]);
  // }

  return outputs;
}