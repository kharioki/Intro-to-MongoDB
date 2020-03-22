const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('updating records', () => {

    var char;
    beforeEach((done) => {
        char = new MarioChar({
            name: 'Mario'
        });
    
        char.save().then(() => {
            done();
        });
    })
  
  it('should update a record from the database', (done) => {
    MarioChar.findOneAndUpdate({ name: 'Mario' }, { name: 'Luigi' }).then((result) => {
        MarioChar.findOne({ _id: char._id  }).then((result) => {
            assert(result.name === 'Luigi');
            done();
        });
    });
  });

});
