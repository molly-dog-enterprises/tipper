$(function() {
  MDE.LoginStore = Fluxxor.createStore({
    initialize: function () {
      this.state = this._calculateState();

      this.bindActions(
        MDE.LoginConstants.LOGIN, this.onLogin,
        MDE.LoginConstants.LOGOUT, this.onLogout,
        MDE.LoginConstants.CANCEL, this.onCancel,
        MDE.LoginConstants.SIGN_IN, this.onSignIn
      );
    },

    _calculateState: function() {
      return localStorage.getItem('userID') === null ? 'loggedOut' : 'loggedIn';
    },

    onLogin: function () {
      this.state = 'login';
      this.emit("change");
    },

    onLogout: function () {
      localStorage.clear('userID'); // TODO: send message to server to logout there as well..
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
        localStorage.setItem('userID', payload.name) ;
        self.state = self._calculateState();
        self.emit("change");
      }).error(function(response) {
        console.log('[error]');
        console.log(response);
      });

//      debugger
//      this.state = 'signUp';
    },

    onCancel: function() {
      this.state = this._calculateState();
      this.emit("change");
    },

    getState: function () {
      return {
        state: this.state
      };
    }
  });
});
