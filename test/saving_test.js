const assert = require('assert');
const MarioChar = require('../models/mariochar');

// describe tests
describe('saving records', () => {

  // create tests
  it('should save a record to the database', (done) => {
    var char = new MarioChar({
        name: 'Mario'
    });

    char.save().then(() => {
        assert(char.isNew === false);
        done();
    });
  });
  
  
})
