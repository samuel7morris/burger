var orm = require("../config/orm.js");

var cat = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    condition = "id="+req.params.id
    orm.update("burgers", {devoured:true}, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = orm;