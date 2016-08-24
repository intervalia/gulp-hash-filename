var crypto = require('crypto');

function generateHash(content){
  var hash = crypto.createHash('md5');
  hash.update(content);
  return hash.digest('hex');
}

module.exports = generateHash;
