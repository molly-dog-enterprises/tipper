$(function() {
  var actions = MDE.LoginActions = {
    cancel: function() {
      this.dispatch(MDE.LoginConstants.CANCEL);
    },
    login: function() {
      this.dispatch(MDE.LoginConstants.LOGIN);
    },
    logout: function() {
      this.dispatch(MDE.LoginConstants.LOGOUT);
    },
    signIn: function(name, password) {
      this.dispatch(MDE.LoginConstants.SIGN_IN, {name: name, password: password});
    }
  };

  var stores = {
    LoginStore: new MDE.LoginStore()
  };

  var flux = MDE.flux = new Fluxxor.Flux(stores, actions);

  flux.on("dispatch", function(type, payload) {
    if (console && console.log) {
      console.log("[Dispatch]", type, payload);
    }
  });
});
