var expressJwt = require('express-jwt');
var secret = sails.config.secret;

module.exports = expressJwt({secret: secret});
