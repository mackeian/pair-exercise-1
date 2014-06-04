/* global describe, it */
var Calculator = (
  function() {
    return {
      add: function (numberString) {
        var numberParts,
          numberPartsInt = [],
          sum = 0;

        if (numberString === "") return 0;
        numberParts = numberString.split(",");
        for (var i = numberParts.length - 1; i >= 0; i--) {
          numberPartsInt[i] = parseInt(numberParts[i], 10);
          sum += numberPartsInt[i];
        }
        return sum;
      }
    };
  }
)();

(function () {
    'use strict';

    describe('Calculator', function() {
        it('should return 0 if empty string', function() {
          Calculator.add("").should.equal(0);
        });
        it('should return number if given a single number', function() {
          Calculator.add("4").should.equal(4);
        });
        it('should return sum if two numbers', function() {
          Calculator.add("4,3").should.equal(7);
        });
        it('should return sum if four numbers', function() {
          Calculator.add("4,3,2,1").should.equal(10);
        });
        it('should handle new line and comma as separator', function() {
          Calculator.add("1\n2,3").should.equal(6);
        });
    });
})();
