var generateHash = require('../lib/generateHash');
var path = require('path');
var fs = require('fs');
var gutil = require('gulp-util');
var chai = require('chai');
var expect = chai.expect;

describe('generateHash.js', function () {
  it('should handle simple content', function() {
    return new Promise(function(resolve, reject) {
      expect(generateHash('0123456789')).to.equal('781e5e245d69b566979b86e28d23f2c7');
      resolve();
    });
  });

  it('should handle empty content', function() {
    return new Promise(function(resolve, reject) {
      expect(generateHash('')).to.equal('d41d8cd98f00b204e9800998ecf8427e');
      resolve();
    });
  });

  it('should handle null content', function() {
    return new Promise(function(resolve, reject) {
      function fn() {
        generateHash(null);
      }

      expect(fn).to.throw;
      resolve();
    });
  });
});
