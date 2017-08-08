function AuthController(){

    var roles;
    var user;
    function setRoles(role) {
      roles = role
    }

    function setUser(inUser) {
      user =  inUser;
    }

    function isAuthorized(neededRole) {
      return roles.indexOf(neededRole) >= 0;
    }

    function isAuthorizedAsync(neededRole, cb) {
      setTimeout(function(){cb(roles.indexOf(neededRole) >= 0)}, 0);
    }

    function isAuthorizedPromise(neededRole, cb) {
      return new Promise(function(resolve) {
        setTimeout(function(){resolve(roles.indexOf(neededRole) >= 0)}, 0);
      })
    }

    function getIndex(req, res) {
      if(req.user.isAuthorized('admin')) {
        return res.render('index');
      }
        res.render('error')
      // res.render('index'); //all getIndex does is send a response to .render
    }

    return {isAuthorized, isAuthorizedAsync, setRoles, isAuthorizedPromise, getIndex, setUser};
}

module.exports = AuthController();
