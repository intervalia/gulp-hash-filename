/* eslint-env mocha */
const formatStr = require('../lib/formatStr');
const {expect} = require('chai');

describe('formatStr.js', () => {
  it('should handle multiple arguments', () => {
    expect(formatStr('{0},{1},{0},{2}', 'zero', 'one', 'two')).to.equal('zero,one,zero,two');
    expect(formatStr('{0},{1},{2}', 'zero', 'one')).to.equal('zero,one,{2}');
  });

  it('should handle simple object', () => {
    expect(formatStr('{zero},{one},{zero},{two}', {zero:0,one:1,two:2})).to.equal('0,1,0,2');
    expect(formatStr('{zero},{one},{two}', {zero:0,one:1})).to.equal('0,1,{two}');
  });

  it('should handle missing arguments', () => {
    expect(formatStr('{zero},{one},{zero},{two}')).to.equal('{zero},{one},{zero},{two}');
  });

  it('should handle limited length', () => {
    const val = {
      a: '1234567890ABCDEF'
    };

    expect(formatStr('{a},{a:2},{a:4},{a:99},{b:10}', val)).to.equal('1234567890ABCDEF,12,1234,1234567890ABCDEF,{b:10}');
  });
});
