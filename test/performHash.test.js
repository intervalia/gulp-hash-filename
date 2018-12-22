/* eslint-env mocha */
const performHash = require('../lib/performHash');
const {expect} = require('chai');
const posixPath = path => path.replace(/\\/g, '/');

describe('performHash.js', () => {
  let file;
  beforeEach(() => {
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

  it('should handle just `{name}`', () => {
    expect(posixPath(performHash('{name}', file).path)).to.equal('/dog/cat/myFile');
  });

  it('should handle `{name}-{hash}{ext}`', () => {
    expect(posixPath(performHash('{name}-{hash}{ext}', file).path)).to.equal('/dog/cat/myFile-54b0c58c7ce9f2a8b551351102ee0938.txt');
  });

  it('should handle `{name:3}-{hash:8}{ext:2}`', () => {
    expect(posixPath(performHash('{name:3}-{hash:8}{ext:2}', file).path)).to.equal('/dog/cat/myF-54b0c58c.t');
  });

  it('should handle `{size} of {name}{ext}`', () => {
    expect(posixPath(performHash('{size} of {name}{ext}', file).path)).to.equal('/dog/cat/14 of myFile.txt');
  });

  it('should handle `{atime}|{ctime}|{mtime}`', () => {
    expect(posixPath(performHash('{atime}|{ctime}|{mtime}', file).path)).to.equal('/dog/cat/2011-10-10T23-24-11.000Z|2011-10-11T01-02-03.000Z|2011-10-12T11-12-00.000Z');
  });

  it('should handle generated files', () => {
    file = {
      path: '/dog/cat/myFile.txt',
      contents: 'this is a test'
    }

    expect(posixPath(performHash('{size}|{atime}|{ctime}|{mtime}', file).path)).to.equal('/dog/cat/|||');
  });
});
