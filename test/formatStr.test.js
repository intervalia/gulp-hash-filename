var formatStr = require('../lib/formatStr');
var path = require('path');
var fs = require('fs');
var gutil = require('gulp-util');
var chai = require('chai');
var expect = chai.expect;

describe('formatStr.js', function () {
  it('should handle multiple arguments', function() {
    return new Promise(function(resolve, reject) {
      expect(formatStr('{0},{1},{0},{2}', 'zero', 'one', 'two')).to.equal('zero,one,zero,two');
      expect(formatStr('{0},{1},{2}', 'zero', 'one')).to.equal('zero,one,{2}');
      resolve();
    });
  });

  it('should handle simple object', function() {
    return new Promise(function(resolve, reject) {
      expect(formatStr('{zero},{one},{zero},{two}', {zero:0,one:1,two:2})).to.equal('0,1,0,2');
      expect(formatStr('{zero},{one},{two}', {zero:0,one:1})).to.equal('0,1,{two}');
      resolve();
    });
  });

  it('should handle missing arguments', function() {
    return new Promise(function(resolve, reject) {
      expect(formatStr('{zero},{one},{zero},{two}')).to.equal('{zero},{one},{zero},{two}');
      resolve();
    });
  });

  it('should handle limited length', function() {
    return new Promise(function(resolve, reject) {
      var val = {
        a: '1234567890ABCDEF'
      };
      expect(formatStr('{a},{a:2},{a:4},{a:99},{b:10}', val)).to.equal('1234567890ABCDEF,12,1234,1234567890ABCDEF,{b:10}');
      resolve();
    });
  });

});
