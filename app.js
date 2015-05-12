'use strict';

var rand = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var letter = (function () {
  var a = 'A'.charCodeAt(0),
    z = 'z'.charCodeAt(0);

  return function () {

    return String.fromCharCode(rand(a, z));
    
  };
}());

var word = function (length) {
  var word = '';
  length = length || rand(4, 7);

  while (word.length < length) {
    word += letter();
  }

  return word;
};

var sentence = function (length) {
  var words = [];
  length = length || rand(4, 10);

  while (words.length < length) {
    words.push(word());
  }

  return words.join(' ');
};

module.exports = (function () {
  return {
    letter: letter,
    word: word,
    sentence: sentence
  };
}());
