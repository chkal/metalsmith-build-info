# metalsmith-build-info

[![npm](https://img.shields.io/npm/v/metalsmith-build-info.svg)](https://www.npmjs.com/package/metalsmith-build-info)
[![Build Status](https://travis-ci.org/chkal/metalsmith-build-info.svg?branch=master)](https://travis-ci.org/chkal/metalsmith-build-info)

Metalsmith plugin to add various build infos to the metadata.

## Installation

```bash
npm install metalsmith-build-info --save-dev
```
    
## Usage

```js
var buildinfo = require("metalsmith-build-info");

Metalsmith(__dirname)
  /* ... */
  .use(buildinfo())
  /* ... */
```

The plugin will set the following metadata:

  * `buildinfo.date`: The date at which the site was generated.
  * `buildinfo.user`: The user who generated the site (i.e. `travis`).
  * `buildinfo.nodejs`: The version of Node.js used to generate the site (i.e. `v6.9.2`).
  * `buildinfo.arch`: String identifying the processor architecture that the Node.js 
    is currently running on (i.e. `x64`).
  * `buildinfo.platform`: String  identifying the operating system platform on which the 
    Node.js process is running on (i.e. `linux`).

## License

MIT
