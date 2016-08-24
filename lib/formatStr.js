var reObj = /\{[^}]+\}/gm;
var reNum = /\{\d+\}/gm;
function formatStr(text, params) {
  var re;

  if (arguments.length > 1) {
    if(typeof params !== 'object') {
      params = Array.prototype.slice.call(arguments, 1);
      re = reNum;
    }
    else {
      re = reObj;
    }

    text = text.replace(re, function(item) {
      var temp = item.slice(1,-1).split(':');
      var key = temp[0];
      var length = temp[1];
      if(params[key] !== undefined) {
        temp = params[key];
        if (!isNaN(length) && length > 0) {
          temp = temp.substr(0,length);
        }
        return temp;
      }
      return item;
    });
  }

  return text;
}

module.exports = formatStr;
