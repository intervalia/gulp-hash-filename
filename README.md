gulp-hash-filename
========================

[![NPM version](http://img.shields.io/npm/v/gulp-hash-filename.svg)](https://npmjs.org/package/gulp-hash-filename)
[![Downloads](http://img.shields.io/npm/dm/gulp-hash-filename.svg)](https://npmjs.org/package/gulp-hash-filename)
[![Support us](http://img.shields.io/gittip/intervalia.svg)](https://www.gittip.com/intervalia/)
[![Build Status](https://travis-ci.org/intervalia/gulp-hash-filename.svg?branch=master)](https://travis-ci.org/intervalia/gulp-hash-filename)
[![Coverage Status](https://coveralls.io/repos/github/intervalia/gulp-hash-filename/badge.svg?branch=master)](https://coveralls.io/github/intervalia/gulp-hash-filename?branch=master)

---

`gulp-hash-filename` is a gulp plug-in that renames each file using a generated hash value based on the contents of the source file.

Using hashed filenames based on content allows for filenames that only change as the content changes. This helps improve caching of your files. If the content does not change then the filename does not change and that file can still be pulled from the browser's cache.

---
>Always reference the documents on the git repo since they are updated more often then the NPM package website. I update NPM when there is a code change. I might change documentation without a code change and, at that time, I would not update the version number or NPM release.

---
#Install
```shell
npm install -g gulp-hash-filename
```


---
#Pull Requests and Issues
Please submit **[pull requests](https://github.com/intervalia/gulp-hash-filename/pulls)** and **[issues](https://github.com/intervalia/gulp-hash-filename/issues)**. I will do my best to review and take care of PRs and issues quickly. If you have suggestions, I would love to hear them.


---
#Usage of `gulp-hash-filename`

###Example of the `hash()` function
Here is an example of how to use the `hash()` function:

```js
var gulp = require('gulp');
var hash = require('gulp-hash-filename');

gulp.task('assemble', function() {
  return gulp.src('./assembly.json')
    .pipe(hash())
    .pipe(gulp.dest('./dist'))
});
```

The example below includes minification and saving the file with both the hashed filename `"{name}-{hash}{ext}"` and the hashed and minimized filename `"{name}-{hash}-min{ext}"` format.

```js
var gulp   = require('gulp');
var uglify  = require('gulp-uglify');
var rename  = require('gulp-rename');
var hash = require('gulp-hash-filename');

gulp.task('assemble', function() {
  return gulp.src('./*.js')
    .pipe(hash())
    .pipe(gulp.dest('./dist'))
    .pipe(uglify())
    .pipe(rename(function (path) {path.basename += "-min";}))
    .pipe(gulp.dest('./dist'))
});
```

You can change how the filename is formatted by passing in a `format` option in the `hash()` function.

```js
var gulp = require('gulp');
var hash = require('gulp-hash-filename');

gulp.task('assemble', function() {
  return gulp.src('./assembly.json')
    .pipe(hash({
    	"format": "{name}.{hash}.{size}{ext}"
    }))
    .pipe(gulp.dest('./dist'))
});
```
---
##Options used in the `hash()` function

Currently (2015-01-13) there is only one option that is allowed in the `hash()` function. That is the `format` option.

`format` is used to control the output filename format. The default value for `format` is `"{name}-{hash}{ext}"`.

**example:** Assuming the incoming filename was `"sample.js"` and the hash value was `"a8c23bc812abef98"` and that the `format` value is the default then the hashed filename would be `"sample-a8c23bc812abef98.js"`

###`format` paramaters
| Parameter | Description |
| --- | --- |
| {name} | The base portion of the filename. For `sample.js` the {name} is `sample`. For `sample.test.js` the {name} is `sample.test`. |
| {ext} | The file extention of the filename. For `sample.js` the {ext} is `.js`. For `testfile.json` the {ext} is `.json` |
| {size} | The size of the file in bytes. This number is base 10 without commas, periods or a leading '0' |
| {hash} | The hase based on the content of the file. |
| {atime} | The file `access` time. |
| {ctime} | The inode or file `change` time. |
| {mtime} | The file `modify` time. |

#### `atime`, `ctime` and `mtime`
For more information about what the time formats mean [go here](http://www.linux-faqs.info/general/difference-between-mtime-ctime-and-atime)

The output format used by `atime`, `ctime` and `mtime` is a format that includes the Year, Month, Date, Hours, Minutes, Seconds and Milliseconds.

**example:** `"2015-01-31T11-34-13.1234Z"`

>As of version 1.2.0 if a file is added through the gulp system that does not support the `file.stat` object the values for `atime`, `ctime` and `mtime` will be an empty string.

#### Limiting the length of the output

> New feature as of version 1.1.0

You can limit the number of characters for the value of each parameter by adding `:value` to the parameter.

For example if you only want to use the first 8 characters of the `hash` value you would use the parameter `{hash:8}`.



#### More examples
Below are some other examples of the output filename based on the following values:

| parameter | value |
| --- | --- |
| filename | "sample.js" |
| file size | 12,234 bytes |
| ctime | Dec 19, 2014 at 3:15:33am and 235 milliseconds |
| hash | ABCDEF0000FEDCBA |

Example output file name:

| format string | output file name |
| --- | --- |
| {name}-{size}.test{ext} | sample-12234.test.js |
| {name}.{hash}.js1 | sample.ABCDEF0000FEDCBA.js1 |
| {name}{ext} | Leaves the filename as it was. (sample.js) |
| proj-{name}-{ctime}{ext} | proj-sample-2014-12-19T03-15-33.235Z.js |
| {name}.{hash:5}{ext} | sample.ABCDE.js |
| {name}.{hash:8}{ext} | sample.ABCDEF00.js |

---
#License
MIT - [License File](https://github.com/intervalia/gulp-hash-filename/tree/master/LICENSE.md)



---
#Update History
[Update History File](https://github.com/intervalia/gulp-hash-filename/tree/master/UPDATE_HISTORY.md)
