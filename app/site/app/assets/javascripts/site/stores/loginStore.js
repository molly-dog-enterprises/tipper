$(function() {
  MDE.LoginStore = Fluxxor.createStore({
    initialize: function () {
      this.state = this._calculateState();

      this.bindActions(
        MDE.LoginConstants.LOGIN, this.onLogin,
        MDE.LoginConstants.LOGOUT, this.onLogout,
        MDE.LoginConstants.CANCEL, this.cancel
      );
    },

    _calculateState: function() {
      return localStorage.getItem('userID') === null ? 'loggedOut' : 'loggedIn'
    },

    onLogin: function (payload) {
      this.state = 'login';
      this.emit("change");
    },

    onLogout: function (payload) {
      localStorage.clear('userID'); // TODO: send message to server to logout there as well..
      this.state = this._calculateState();
      this.emit("change");
    },

    onSignUp: function () {
      this.state = 'signUp';
      this.emit("change");
    },

    cancel: function() {
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
