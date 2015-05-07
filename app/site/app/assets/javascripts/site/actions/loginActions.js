$(function() {
  var actions = MDE.LoginActions = {
    login: function() {
      this.dispatch(MDE.LoginConstants.LOGIN);
    },
    signUp: function() {
      this.dispatch(MDE.LoginConstants.SIGN_UP);
    },
    cancel: function() {
      this.dispatch(MDE.LoginConstants.CANCEL);
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
