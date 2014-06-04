/* global describe, it */
var Calculator = (
  function() {
    'use strict';

    return {
      add: function (numberString) {
        var numberParts,
          numberPartsInt = [],
          sum = 0,
          separators = '\\n,',
          separatorsRegExp = '';

        if (numberString === '') {
          return 0;
        }

        var lengthOfPrefix = 2;
        if (numberString.substr(0, lengthOfPrefix) === '//') {
          var indexOfLineBreak = numberString.indexOf('\n');
          var separator = numberString.substring(lengthOfPrefix, indexOfLineBreak);
          separators += separator;
        }

        separatorsRegExp = new RegExp('[' + separators + ']', 'g');
        console.log(separatorsRegExp);
        numberParts = numberString.split(separatorsRegExp);
        console.log(numberParts);
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
      Calculator.add('').should.equal(0);
    });
    it('should return number if given a single number', function() {
      Calculator.add('4').should.equal(4);
    });
    it('should return sum if two numbers', function() {
      Calculator.add('4,3').should.equal(7);
    });
    it('should return sum if four numbers', function() {
      Calculator.add('4,3,2,1').should.equal(10);
    });
    it('should handle new line and comma as separator', function() {
      Calculator.add('1\n2,3').should.equal(6);
    });
    it('should handle custom separators', function() {
      Calculator.add('//;\n1\n2,3;10').should.equal(16);
    });
  });
})();
