const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('finding records', () => {

    beforeEach((done) => {
        var char = new MarioChar({
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
})
