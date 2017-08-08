var assert = require('assert');
var should = require('chai').should(); //when dealing with nulls you will need to pull in
//should as null is not an object and therefore null.should will not work as should is on
// the prototype thanks to the auth.controller.spec.js file.
// describe('Basic Mocha Test', function() {
//   it('should throw erros', function() {
//     assert.equal(3,3);
//   })
// });

describe('Basic Mocha Test', function() {
  it('should deal with objects', function() {
    var obj = {name: 'Jon', gender:'male'};
    var objB = {name: 'Jon', gender:'male'};
    // even though should is not here it get appended to object to prototype to the entire execution
    // of the application from the authController.spec.js
    obj.should.have.property('name').equal('Jon');
    // obj.should.deep.equal(objB); // checks to see if they are the same object, so you use deep
  })
  it('should allow testing nulls', function () {
    var iAmNull = null;
    should.not.exist(iAmNull); // this is how we deal with nulls
  })
});
