/* global describe, it */

(function () {
    'use strict';

    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('should run here few assertions', function () {

            });
        });
    });

    describe('Calculator', function() {
        describe('Adding numbers', function () {
            it('should return sum of numbers', function() {
                var foo = function(a, b) { return a+b};
                foo(3,5).should.equal(8);
            });
        });
    });
})();
