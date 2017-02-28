var assert = require("assert");
var Metalsmith = require("metalsmith");
var buildinfo = require("../src/index.js");
var path = require("path");

describe("Should set metadata", function () {

  var metalsmith;

  beforeEach(function () {
    metalsmith = Metalsmith(path.join(__dirname, "fixture"))
      .use(buildinfo());
  });

  it("Should add build date", function (done) {

    metalsmith.build(function (err) {
      if (err) {
        done(err);
      }
      assert.ok(metalsmith.metadata().buildinfo.date);
      done();
    });

  });

  it("Should add user name", function (done) {

    metalsmith.build(function (err) {
      if (err) {
        done(err);
      }
      assert.equal(process.env.USER, metalsmith.metadata().buildinfo.user);
      done();
    });

  });

  it("Should add Node.js version", function (done) {

    metalsmith.build(function (err) {
      if (err) {
        done(err);
      }
      assert.equal(process.version, metalsmith.metadata().buildinfo.nodejs);
      done();
    });

  });

  it("Should add arch property", function (done) {

    metalsmith.build(function (err) {
      if (err) {
        done(err);
      }
      assert.equal(process.arch, metalsmith.metadata().buildinfo.arch);
      done();
    });

  });

  it("Should add platform property", function (done) {

    metalsmith.build(function (err) {
      if (err) {
        done(err);
      }
      assert.equal(process.platform, metalsmith.metadata().buildinfo.platform);
      done();
    });

  });

});
