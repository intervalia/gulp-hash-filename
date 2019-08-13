Update History
==============

| Version | Date | Description |
| --- | --- | --- |
| 2.0.2 | 2019-08-13 | * Updated all dependancies<br>Changed format of Update History |
| 2.0.1 | 2019-01-02 | * Minor bug fix to allow no arguments to be passed into the `hash()` function.<br/>* Fixed ISSUE#5. No longer crash if atime, mtime or ctime don't exist. |
| 2.0.0 | 2019-01-02 | * This is really PR#7 from dwighthouse - But going a little further in updating ALL dependencies and removing code that is no longer needed.<br/>* Fixed ISSUE#6. Directly related to PR#7. |
| 1.2.0 | 2016-08-31 | * PR#3 from tuck182 - Handle generated files that do not support the `file.stat` object. |
| 1.1.1 | 2016-08-24 | * Adding support for coveralls |
| 1.1.0 | 2016-08-23 | * Added code to allow length limitation for any field. {hash} will use the full length while {hash:8} will only use the first 8 characters of the hash value.<br>* Broke single file into multiple files for testing<br>* Added Mocha/Chai testing for all non-gulp functionality |
| 1.0.0 | 2015-01-13 | * Initial Release<br>* Added {name}, {ext}, {hash}, {atime}, {ctime} and {mtime} as options to the format routine<br>* Set default of format string to "{name}-{hash}{ext}" |
