MDE.Components.LoginManager = (function() {
  var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

  return React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("LoginStore")],

    getStateFromFlux: function() {
      var flux = this.getFlux();
      // Our entire state is made up of the TodoStore data. In a larger
      // application, you will likely return data from multiple stores, e.g.:
      //
      //   return {
      //     todoData: flux.store("TodoStore").getState(),
      //     userData: flux.store("UserStore").getData(),
      //     fooBarData: flux.store("FooBarStore").someMoreData()
      //   };
      flux.store("LoginStore").getInitialState(this.props.user_id, this.props.auth_token);
      return flux.store("LoginStore").getState();
    },

    render: function () {
      if(this.state.state === 'loggedIn') {
        return (<MDE.Components.LoggedIn />);
      }
      if(this.state.state === 'loggedOut') {
        return (<MDE.Components.LoggedOut />);
      }
      if(this.state.state === 'login') {
        return (<MDE.Components.LoginForm  />);
      }
    }
  });
})();
