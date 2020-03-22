const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;

// Connect to the db before tests run
before((done) => {
    // connect to mongodb
    mongoose.connect('mongodb://localhost/testaroo');

    mongoose.connection.once('open', function () {
        console.log('connection has been made, now make fireworks!!');
        done();
    }).on('error', function(error) {
        console.log('connection error:', error);
    });
});

// drop the characters collection before each test
beforeEach((done) => {
    // Drop the collection
    mongoose.connection.collections.mariochars.drop(() => {
        done();
    } )
});