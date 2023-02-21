Update History
==============

| Version | Released | Details |
| --- | --- | --- |
| 4.1.0 | 2023-02-21 | * Updated all 3rd party repos |
| 3.0.0 | 2020-01-28 | * Updated all 3rd party repos<br/>* Removed node 8 support<br/>* Updated to newer ES6 syntax |
| 2.0.1 | 2019-01-02 | * Minor bug fix to allow no arguments to be passed into the `hash()` function.<br/>* Fixed ISSUE#5. No longer crash if atime, mtime or ctime don't exist. |
| 2.0.0 | | * This is really PR#7 from dwighthouse - But going a little further in updating ALL dependencies and removing code that is no longer needed.<br/>* Fixed ISSUE#6. Directly related to PR#7. |
| 1.2.0 | | * PR#3 from tuck182 - Handle generated files that do not support the `file.stat` object. |
| 1.1.1 | | * Adding support for coveralls |
| 1.1.0 | | * Added code to allow length limitation for any field. {hash} will use the full length while {hash:8} will only use the first 8 characters of the hash value.<br/>* Broke single file into multiple files for testing<br/>* Added Mocha/Chai testing for all non-gulp functionality |
| 1.0.0 | | * Initial Release<br/>* Added {name}, {ext}, {hash}, {atime}, {ctime} and {mtime} as options to the format routine<br/>* Set default of format string to "{name}-{hash}{ext}" |
