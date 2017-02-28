function plugin() {

  return function (files, metalsmith, done) {

    var metadata = metalsmith.metadata();

    metadata.buildinfo = {
      date: new Date(),
      user: process.env.USER,
      nodejs: process.version,
      arch: process.arch,
      platform: process.platform
    };

    setImmediate(done);

  };

}

module.exports = plugin;
