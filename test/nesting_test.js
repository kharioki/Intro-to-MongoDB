const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

describe('nesting tests', () => {

    beforeEach((done) => {
        mongoose.connection.collections.authors.drop(() => done());
    })
  
    // Create tests
    it('should create an author with sub-documents', (done) => {
      var pat = new Author({
        name: 'Patrick Rothfuss',
        books: [{ title: 'Name of the wind', pages: 400 }] 
      })

      pat.save().then(() => {
          Author.findOne({ name: 'Patrick Rothfuss'}).then(record => {
              assert(record.books.length === 1);
              done();
          })
      });
    });

    it('should add a book to an author', (done) => {
        var pat = new Author({
            name: 'Patrick Rothfuss',
            books: [{ title: 'Name of the wind', pages: 400 }] 
        })

        pat.save().then(() => {
            Author.findOne({ name: 'Patrick Rothfuss'}).then(record => {
                // add a book to the books array
                record.books.push({ title: "Wise Man's Fear", pages: 500 });
                // save and check length
                record.save().then(() => {
                    Author.findOne({ name: 'Patrick Rothfuss'}).then(result => {
                        assert(result.books.length === 2);
                        done();
                    })
                })
            })
        });
    })
    
    
})
