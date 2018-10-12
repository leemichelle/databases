var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      if (req.method === 'GET' && req.url === '/classes/messages') {
        res.statusCode = 200;
      }
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      if (req.method === 'POST' && req.url === '/classes/messages') {
        res.statusCode = 201;
      }
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

