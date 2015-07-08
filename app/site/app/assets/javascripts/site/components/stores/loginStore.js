MDE.LoginStore = (function() {
  return Fluxxor.createStore({
    initialize: function () {
      self.errors = [];

      this.bindActions(
        MDE.Constants.LoginConstants.LOGIN, this.onLogin,
        MDE.Constants.LoginConstants.LOGOUT, this.onLogout,
        MDE.Constants.LoginConstants.CANCEL, this.onCancel,
        MDE.Constants.LoginConstants.SIGN_IN, this.onSignIn
      );
    },

    _calculateState: function() {
      return !!this.userID ? 'loggedIn' : 'loggedOut';
    },

    getInitialState: function(_userID, _auth) {
      this.userID = _userID;
      this.auth = _auth;
      this.state = this._calculateState();
    },

    onLogin: function () {
      this.state = 'login';
      this.errors = [];
      this.emit("change");
    },

    onLogout: function () {
      this.userID = null; // TODO: send message to server to logout there as well..
      this.auth = null; // TODO: send message to server to logout there as well..
      this.state = this._calculateState();
      this.emit("change");
    },

    onSignIn: function (payload) {
      var self = this;
      $.ajax({
        url: '/login',
        method: 'POST',
        data: payload,
      }).success(function(response) {
        console.log('[success]');
        console.log(response);
        if(response.status == 'success') {
          self.userID = payload.name;
          self.state = self._calculateState();
        } else {
          self.errors = response.errors
        }
        self.emit("change");
      }).error(function(response) {
        console.log('[error]');
        console.log(response);
      });
    },

    onCancel: function() {
      this.state = this._calculateState();
      this.emit("change");
    },

    getState: function () {
      return {
        state: this.state
      };
    },
    getErrors: function () {
      return {
        errors: this.errors
      };
    },
    getUserDetails: function() {
      return {
        userID: this.userID,
        authToken: this.auth
      }
    }
  });
})();
