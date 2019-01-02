/* eslint-env mocha */
const generateHash = require('../lib/generateHash');
const {expect} = require('chai');

describe('generateHash.js', () => {
  it('should handle simple content', () => {
    expect(generateHash('0123456789')).to.equal('781e5e245d69b566979b86e28d23f2c7');
  });

  it('should handle empty content', () => {
    expect(generateHash('')).to.equal('d41d8cd98f00b204e9800998ecf8427e');
  });

  it('should handle null content', () => {
    function fn() {
      generateHash(null);
    }

    expect(fn).to.throw; // eslint-disable-line no-unused-expressions
  });
});
