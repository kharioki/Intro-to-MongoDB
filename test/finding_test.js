const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('finding records', () => {

    var char;
    beforeEach((done) => {
        char = new MarioChar({
            name: 'Mario'
        });
    
        char.save().then(() => {
            assert(char.isNew === false);
            done();
        });
    })
  
  it('should find a record from the database', (done) => {
    MarioChar.findOne({ name: 'Mario' }).then(result => {
        assert(result.name === 'Mario');
        done();
    })
  });

  it('should find a record by ID from the database', (done) => {
    MarioChar.findOne({ _id: char._id }).then(result => {
        assert(result._id.toString() === char._id.toString());
        done();
    })
  });
});
