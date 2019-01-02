const stream = require('stream');
const performHash = require('./lib/performHash');

function hashFileName(options) {
  const assemblyStream = new stream.Transform({objectMode: true});
  let opts = options;
  if (!opts || typeof opts !== 'object') {
    opts = {};
  }

  const format = opts.format || "{name}-{hash}{ext}";

  assemblyStream._transform = function(file, unused, callback) {
    this.push(performHash(format, file));
    callback();
  };

  return assemblyStream;
}

module.exports = hashFileName;
