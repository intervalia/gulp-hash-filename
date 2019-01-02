var path = require('path');
var formatStr = require('./formatStr');
var getDateStr = require('./getDateStr');
var generateHash = require('./generateHash');

function performHash(format, file) {
  var ext = path.extname(file.path);
  var fname = path.basename(file.path, ext);
  var dir = path.dirname(file.path);
  var params = {
    "name": fname,
    "ext": ext,
    "hash": generateHash(file.contents),
    "size":  file.stat ? file.stat.size : '',
    "atime": file.stat && file.stat.atime ? getDateStr(file.stat.atime) : '',
    "ctime": file.stat && file.stat.ctime ? getDateStr(file.stat.ctime) : '',
    "mtime": file.stat && file.stat.mtime ? getDateStr(file.stat.mtime) : ''
  };
  var fileName = formatStr(format, params);
  file.path = path.join(dir, fileName);
  return file;
}

module.exports = performHash;
