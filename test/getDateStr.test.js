var getDateStr = require('../lib/getDateStr');
var path = require('path');
var fs = require('fs');
var gutil = require('gulp-util');
var chai = require('chai');
var expect = chai.expect;

describe('getDateStr.js', function () {
  it('should handle valid Date', function() {
    return new Promise(function(resolve, reject) {
      var d = new Date('Mon, 4 Dec 1995 13:30:00 GMT');
      expect(getDateStr(d)).to.equal('1995-12-04T13-30-00.000Z');
      resolve();
    });
  });

  it('should handle null Date', function() {
    return new Promise(function(resolve, reject) {
      function fn() {
        var d = null;
        getDateStr(d);
      }

      expect(fn).to.throw;
      resolve();
    });
  });
});
