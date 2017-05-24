var pjson = require('metalsmith/package.json');

function plugin() {

  return function (files, metalsmith, done) {

    var metadata = metalsmith.metadata();

    metadata.buildinfo = {
      date: new Date(),
      user: process.env.USER,
      nodejs: process.version,
      arch: process.arch,
      platform: process.platform,
      version: pjson.version
    };
    
    setImmediate(done);

  };

}

module.exports = plugin;
