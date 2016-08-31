Update History
==============


### 1.2.0
* PR#3 from tuck182 - Handle generated files that do not support the `file.stat` object.

### 1.1.1
* Adding support for coveralls

### 1.1.0
* Added code to allow length limitation for any field. {hash} will use the full length while {hash:8} will only use the first 8 characters of the hash value.
* Broke single file into multiple files for testing
* Added Mocha/Chai testing for all non-gulp functionality

### 1.0.0
* Initial Release
* Added {name}, {ext}, {hash}, {atime}, {ctime} and {mtime} as options to the format routine
* Set default of format string to "{name}-{hash}{ext}"
