var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      var sql = "SELECT message from Messages";
      dbConnection.query(sql, (err, result) => {
        if(err) throw err;
      });
    }, // a function which produces all the messages
    post: function (data) {
      console.log('hiii');
      var sql = "INSERT INTO Messages (message) values (data)";
      dbConnection.query(sql, (err, result) => {
        if(err) throw err;
      });     
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      var sql = "SELECT username from Messages";
      dbConnection.query(sql, (err, result) => {
        if(err) throw err;
      });
    },
    post: function (name) {
      console.log('hiii');
      var sql = "INSERT INTO Messages (username) values (name)";
      dbConnection.query(sql, (err, result) => {
        if(err) throw err;
      }); 
    }
  }
};

// it('Should insert posted messages to the DB', function(done) {
//     // Post the user to the chat server.
//     request({
//       method: 'POST',
//       uri: 'http://127.0.0.1:3000/classes/users',
//       json: { username: 'Valjean' }
//     }, function () {
//       // Post a message to the node chat server:
//       request({
//         method: 'POST',
//         uri: 'http://127.0.0.1:3000/classes/messages',
//         json: {
//           username: 'Valjean',
//           message: 'In mercy\'s name, three days is all I need.',
//           roomname: 'Hello'
//         }
//       }, function () {
//         // Now if we look in the database, we should find the
//         // posted message there.

//         // TODO: You might have to change this test to get all the data from
//         // your message table, since this is schema-dependent.
//         var queryString = 'SELECT * FROM Messages';
//         var queryArgs = [];

//         dbConnection.query(queryString, queryArgs, function(err, results) {
//           // Should have one result:
//           expect(results.length).to.equal(1);

//           // TODO: If you don't have a column named text, change this test.
//           expect(results[0].message).to.equal('In mercy\'s name, three days is all I need.');

//           done();
//         });
//       });
//     });
//   });


//   it('Should output all messages from the DB', function(done) {
//     // Let's insert a message into the db
//        var queryString = 'SELECT * FROM Messages';
//        var queryArgs = [];
//     // TODO - The exact query string and query args to use
//     // here depend on the schema you design, so I'll leave
//     // them up to you. */

//     dbConnection.query(queryString, queryArgs, function(err) {
//       if (err) { throw err; }

//       // Now query the Node chat server and see if it returns
//       // the message we just inserted:
//       request('http://127.0.0.1:3000/classes/messages', function(error, response, body) {
//         var messageLog = JSON.parse(body);
//         expect(messageLog[0].message).to.equal('Men like you can never change!');
//         expect(messageLog[0].roomname).to.equal('main');
//         done();
//       });
//     });
//   });
// });
