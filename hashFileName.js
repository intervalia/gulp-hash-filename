var stream = require('stream');
var path = require('path');
var crypto = require('crypto');

function generateHash(content){
  var hash = crypto.createHash('md5');
  hash.update(content);
  return hash.digest('hex');
}

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
      var key = item.slice(1,-1);
      if(params[key] !== undefined) {
        return params[key];
      }
      return item;
    });
  }

  return text;
}

function pad(number) {
  return (number < 10) ? '0' + number : number;
}

function getDateStr(dataObj) {
  return dataObj.getUTCFullYear() +
    '-' + pad(dataObj.getUTCMonth() + 1) +
    '-' + pad(dataObj.getUTCDate()) +
    'T' + pad(dataObj.getUTCHours()) +
    '-' + pad(dataObj.getUTCMinutes()) +
    '-' + pad(dataObj.getUTCSeconds()) +
    '.' + (dataObj.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
    'Z';
}

function hashFileName(options) {
  'use strict';
  var assemblyStream = new stream.Transform({objectMode: true});
  options = options || {};
  var format = options.format||"{name}-{hash}{ext}";

  assemblyStream._transform = function(file, unused, callback) {
    //console.log(JSON.stringify(file));
    var ext = path.extname(file.path);
    var fname = path.basename(file.path, ext);
    var dir = path.dirname(file.path);
    var params = {
      "name": fname,
      "ext": ext,
      "hash": generateHash(file.contents),
      "size": file.stat.size,
      "atime": getDateStr(file.stat.atime),
      "ctime": getDateStr(file.stat.ctime),
      "mtime": getDateStr(file.stat.mtime),
    };
    var fileName = formatStr(format, params);
    file.path = path.join(dir, fileName);
    this.push(file);

    callback();
  };

  return assemblyStream;
}

// exporting the plugin main function
module.exports = hashFileName;
