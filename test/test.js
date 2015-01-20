var assert = require('assert');
var pseudoElements = require('..');

var elements = ['after', 'before', 'first-letter', 'first-line', 'selection'];

describe('pseudo-elements', function() {

  it('should do return a list of pseudo-elements', function() {
    assert.deepEqual(pseudoElements(), elements);
  });
});
