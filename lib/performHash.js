const path = require('path');
const formatStr = require('./formatStr');
const getDateStr = require('./getDateStr');
const generateHash = require('./generateHash');

function performHash(format, file) {
  const ext = path.extname(file.path);
  const fname = path.basename(file.path, ext);
  const dir = path.dirname(file.path);
  const params = {
    "name": fname,
    "ext": ext,
    "hash": generateHash(file.contents),
    "size":  file.stat ? file.stat.size : '',
    "atime": file.stat && file.stat.atime ? getDateStr(file.stat.atime) : '',
    "ctime": file.stat && file.stat.ctime ? getDateStr(file.stat.ctime) : '',
    "mtime": file.stat && file.stat.mtime ? getDateStr(file.stat.mtime) : ''
  };
  const fileName = formatStr(format, params);
  file.path = path.join(dir, fileName);
  return file;
}

module.exports = performHash;
