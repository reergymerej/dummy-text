'use strict';

var app = require('../app.js'),
  will = require('willy').will;

describe('letter', function () {
  it('should return a string', function () {
    will(app.letter()).beA(String);
  });
});

describe('word', function () {
  it('should return a string of 4-7 chars', function () {
    var length = app.word().length;
    will(length).beMoreThan(3);
    will(length).beLessThan(8);
  });

  it('should return a string of a specified length', function () {
    will(app.word(2).length).be(2);
  });

  it('should return a word with a length within a min/max', function () {
    var length = app.word(6, 9).length;
    will(length).beMoreThan(5);
    will(length).beLessThan(10);
  });
});

describe('sentence', function () {
  var sentence;
  before(function () {
    sentence = app.sentence();
  });

  it('should return a sentence with 4-10 words, space-delimited', function () {
    var length = sentence.match(/ /g).length;
    will(length).beMoreThan(2);
    will(length).beLessThan(10);
  });
});