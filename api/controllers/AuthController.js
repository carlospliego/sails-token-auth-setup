/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var auth = require('../services/auth');

module.exports = {
  login: function (req, res) {
    auth.login(req, res);
  },
  validate_token: function (req, res) {
    auth.isvalidtoken(req, res);
  },
  logout: function(req, res){
    req.logout();
    res.send(200);
  }
};

