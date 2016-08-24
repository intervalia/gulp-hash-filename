var stream = require('stream');
var performHash = require('./lib/performHash');

function hashFileName(options) {
  'use strict';
  var assemblyStream = new stream.Transform({objectMode: true});
  options = options || {};
  var format = options.format||"{name}-{hash}{ext}";

  assemblyStream._transform = function(file, unused, callback) {
    this.push(performHash(format, file));
    callback();
  };

  return assemblyStream;
}

// exporting the plugin main function
module.exports = hashFileName;
