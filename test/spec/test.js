/* global describe, it */
require('calculator.js');

(function () {
    'use strict';

    describe('Calculator', function() {
        describe('Adding two numbers', function () {
            it('should return sum of numbers', function() {
                Calculator.add(1, 2).should.equal(3);
            });
        });
    });
})();
