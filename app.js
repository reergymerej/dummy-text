'use strict';

var rand = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var letter = (function () {
  var a = 'a'.charCodeAt(0),
    z = 'z'.charCodeAt(0);

  return function () {

    return String.fromCharCode(rand(a, z));

  };
}());

var word = function (min, max) {
  var word = '', length;

  if (arguments.length === 0) {
    length = rand(4, 7);

  } else {
    min = min || 4;

    if (max) {
      length = rand(min, max);
    } else {
      length = min;
    }
  }

  while (word.length < length) {
    word += letter();
  }

  return word;
};

var sentence = function (length) {
  var words = [];
  length = length || rand(4, 10);

  while (words.length < length) {
    words.push(word(1, 7));
  }

  return words.join(' ');
};

module.exports = {
  letter: letter,
  word: word,
  sentence: sentence
};
