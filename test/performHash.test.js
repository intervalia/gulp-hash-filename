var performHash = require('../lib/performHash');
var path = require('path');
var fs = require('fs');
var gutil = require('gulp-util');
var chai = require('chai');
var expect = chai.expect;

describe('performHash.js', function () {
  var file;
  beforeEach(function() {
    file = {
      path: '/dog/cat/myFile.txt',
      contents: 'this is a test',
      stat: {
        size: 14,
        atime: new Date('Mon, 10 Oct 2011 23:24:11 GMT'),
        ctime: new Date('Tue, 11 Oct 2011 01:02:03 GMT'),
        mtime: new Date('Wed, 12 Oct 2011 11:12:00 GMT')
      }
    };
  });

  it('should handle just `{name}`', function() {
    return new Promise(function(resolve, reject) {
      expect(performHash('{name}', file).path).to.equal('/dog/cat/myFile');
      resolve();
    });
  });

  it('should handle `{name}-{hash}{ext}`', function() {
    return new Promise(function(resolve, reject) {
      expect(performHash('{name}-{hash}{ext}', file).path).to.equal('/dog/cat/myFile-54b0c58c7ce9f2a8b551351102ee0938.txt');
      resolve();
    });
  });

  it('should handle `{name:3}-{hash:8}{ext:2}`', function() {
    return new Promise(function(resolve, reject) {
      expect(performHash('{name:3}-{hash:8}{ext:2}', file).path).to.equal('/dog/cat/myF-54b0c58c.t');
      resolve();
    });
  });

  it('should handle `{size} of {name}{ext}`', function() {
    return new Promise(function(resolve, reject) {
      expect(performHash('{size} of {name}{ext}', file).path).to.equal('/dog/cat/14 of myFile.txt');
      resolve();
    });
  });

  it('should handle `{atime}|{ctime}|{mtime}`', function() {
    return new Promise(function(resolve, reject) {
      expect(performHash('{atime}|{ctime}|{mtime}', file).path).to.equal('/dog/cat/2011-10-10T23-24-11.000Z|2011-10-11T01-02-03.000Z|2011-10-12T11-12-00.000Z');
      resolve();
    });
  });

  it('should handle generated files', function() {
    return new Promise(function(resolve, reject) {
      file = {
        path: '/dog/cat/myFile.txt',
        contents: 'this is a test',
      }
      expect(performHash('{size}|{atime}|{ctime}|{mtime}', file).path).to.equal('/dog/cat/|||');
      resolve();
    });
  });
});
