var assert = require('assert');
var authController = require('../../controllers/auth.controller');
var expect = require('chai').expect; // is not a function
var should = require('chai').should();//should is a function that needs to be executed before being used
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var sinon = require('sinon');
chai.use(chaiAsPromised);
chai.should();

describe('AuthController', function() {
  beforeEach(function () {
    console.log('running before each');
    authController.setRoles(['user']); //helps us apply DRY principle
  })
  describe('isAuthorized', function() {
    var user = {};
    beforeEach(function () {
      user = {
        roles: ['user'],
        isAuthorized: function (neededRole) {
          return this.roles.indexOf(neededRole) >= 0;
        }
      }
      sinon.spy(user, 'isAuthorized');
      authController.setUser(user);
    })
    it('Should return false if not authorized', function() {
      var isAuth = authController.isAuthorized('admin');
      console.log(user.isAuthorized);
      user.isAuthorized.calledOnce.should.be.true;
      // assert.equal(false, isAuth); // same as below??
      expect(isAuth).to.be.false; // same thing as below but using chai
      // assert.equal(false, authController.isAuthorized('admin'));
    })
    it('Should return true if authorized', function() {
      authController.setRoles(['user', 'admin']);
      var isAuth = authController.isAuthorized('admin')
      isAuth.should.be.true // same thing below using chai
      // assert.equal(true, authController.isAuthorized('admin'));
    })
    it('should not allow a get if not authorized');
    it('should allow get if authorized');
  })
  describe('isAuthorizedAsync', function() {
    beforeEach(function () {
      throw({error: 'error'})
    })
    it('Should return false if not authorized', function(done) {
      // this.timeout(2500)
      authController.isAuthorizedAsync('admin',
       function(isAuth) {
         assert.equal(false, isAuth);
         done(); // we pass in done to the function for async tests, and when we are done we call done.
       });
    })
  })
  describe('isAuthorizedPromise', function() {
    it('Should return false if not authorized', function(done) {
      authController.isAuthorizedPromise('admin').should.eventually.be.false;
    })
  })
  describe.only('getIndex', function() {
    var user = {}
    beforeEach(function () {
      user = {
        roles: ['user'],
        isAuthorized: function (neededRole) {
          return this.roles.indexOf(neededRole) >= 0;
        }
      }
    })
    it('should render index if authorized', function() {
      var isAuth = sinon.stub(user, 'isAuthorized').returns(true);
      var req = {user: user};
      var res = {
        render: sinon.spy()
      };

      authController.getIndex(req, res);
      isAuth.calledOnce.should.be.true;
      res.render.calledOnce.should.be.true;
      // console.log(res.render);
      res.render.firstCall.args[0].should.equal('index')
    })
  })
})
