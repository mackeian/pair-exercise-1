/* global describe, it */
var Calculator = (
  function() {
    return {
      add: function(number_string) {
        if (number_string === "") return 0;
        var number_parts = number_string.split(",");
        if (number_parts.length == 1) {
          return parseInt(number_parts[0], 10);
        }
      }
    };
  }
)();

(function () {
    'use strict';

    describe('Calculator', function() {
        it('return 0 if empty string', function() {
            Calculator.add("").should.equal(0);
        });
        it('return number if given a single number', function() {
            Calculator.add("4").should.equal(4);
        });
        it('return sum if two numbers', function() {
            Calculator.add("4,3").should.equal(7);
        });
    });
})();
