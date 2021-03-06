const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('deleting records', () => {

    var char;
    beforeEach((done) => {
        char = new MarioChar({
            name: 'Mario'
        });
    
        char.save().then(() => {
            done();
        });
    })
  
  it('should delete a record from the database', (done) => {
    MarioChar.findOneAndRemove({ name: 'Mario' }).then((result) => {
        MarioChar.findOne({ name: 'Mario' }).then((result) => {
            assert(result === null);
            done();
        });
    });
  });

});
