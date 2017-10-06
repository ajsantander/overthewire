const tfa = require('text-frequencies-analysis');
const helpers = require("text-frequencies-analysis/lib/helpers")
const fs = require('fs');

/*
* Performs basic frequency analysis on inputed text.
* - Frequency of characters.
* - Frequency of bigrams (pairs).
* */

const input = fs.readFileSync('./input', 'utf8').replace(new RegExp(' ', 'g'), '');
// const input = "ABCDEDEABAAA";

// Variation of tfa's countPairs method that doesn't consider
// AB and BA to be the same pair
tfa.countPairsSimple = function pairs(text, regex) {
  var pairMap = Object.create(null);
  text.slice(0, -1).split("").forEach(function(char, index) {
    var nextChar = text[index + 1]
    if (char !== nextChar && regex.test(text.substr(index, 2))) {
      var pair = [char, nextChar].join("")
      helpers.increment(pairMap, pair)
    }
  })
  return tfa.sortTuples(helpers.objectToArray(pairMap))
}
// Variation of tfa's countPairs method that matches repeating chars
tfa.countRepeasts = function pairs(text, regex) {
  var pairMap = Object.create(null);
  text.slice(0, -1).split("").forEach(function(char, index) {
    var nextChar = text[index + 1]
    if (char === nextChar && regex.test(text.substr(index, 2))) {
      var pair = [char, nextChar].join("")
      helpers.increment(pairMap, pair)
    }
  })
  return tfa.sortTuples(helpers.objectToArray(pairMap))
}

const charsCounts = tfa.countEach(input.split(''));
console.log('charsCounts:', charsCounts);

const charPercentages = tfa.relative(charsCounts);
console.log('charPercentages:', charPercentages);

const bigramCount = tfa.countPairsSimple(input, new RegExp('^[A-Z]{2}$', ''));
console.log('bigramCount:', bigramCount);

const bigramPercentages = tfa.relative(bigramCount);
console.log('bigramPercentages:', bigramPercentages);

const repeatsCount = tfa.countRepeasts(input, new RegExp('^[A-Z]{2}$', ''));
console.log('repeatsCount:', repeatsCount);

const repeatPercentages = tfa.relative(repeatsCount);
console.log('repeatPercentages:', repeatPercentages);