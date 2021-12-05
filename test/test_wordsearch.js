const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')
const transpose = require('../matrix_transposition.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'S', 'Q', 'U', 'A', 'L'],
      ['y', 'E', 'I', 'E', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'I', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'N', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'F', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'L', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'D', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return false if the no word given", function() {
    const result = wordSearch([
      ['A', '', 'C', 'S', 'Q', 'U', 'A', 'L'],
      ['y', 'E', 'I', 'E', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'I', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'N', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'F', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'L', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'D', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], '')

    assert.isFalse(result);
  });

  it("should return false if the no letters given", function() {
    const result = wordSearch([
      [],
    ], 'someone')

    assert.isFalse(result);
  });

  it("should return true if one array of JOE is gven", function() {
    const result = wordSearch([
      ['J', 'O', 'E'],
    ], 'JOE')

    assert.isTrue(result);
  });

  it("should return true if three array spell JOE", function() {
    const result = wordSearch([
      ['J'], 
      ['O'], 
      ['E']
    ], 'JOE')

    assert.isTrue(result);
  });

  it("should return false if array spells JoE instead of JOE", function() {
    const result = wordSearch([
      ['J'], ['o'], ['E']
    ], 'JOE')

    assert.isFalse(result);
  });

  
});
