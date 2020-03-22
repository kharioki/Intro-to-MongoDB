const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('updating records', () => {

    var char;
    beforeEach((done) => {
        char = new MarioChar({
            name: 'Mario',
            weight: 50
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

  it('should increment weight record by 1 in the database', (done) => {
    MarioChar.updateMany({}, { $inc: { weight: 1 } }).then(() => {
        MarioChar.findOne({ name: 'Mario' }).then((record) => {
            assert(record.weight === 51);
            done();
        });
      });
  });

});
