/* eslint-env mocha */
const getDateStr = require('../lib/getDateStr');
const {expect} = require('chai');

describe('getDateStr.js', () => {
  it('should handle valid Date', () => {
    const d = new Date('Mon, 4 Dec 1995 13:30:00 GMT');
    expect(getDateStr(d)).to.equal('1995-12-04T13-30-00.000Z');
  });

  it('should handle null Date', () => {
    function fn() {
      const d = null;
      getDateStr(d);
    }

    expect(fn).to.throw; // eslint-disable-line no-unused-expressions
  });
});
