$(function() {
  var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

  var LoginManager = MDE.LoginManager = React.createClass({
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
      return flux.store("LoginStore").getState();
    },

    render: function () {
      if(this.state.state === 'loggedIn') {
        return (<MDE.LoggedIn />);
      }
      if(this.state.state === 'loggedOut') {
        return (<MDE.LoggedOut />);
      }
      if(this.state.state === 'login') {
        return (<MDE.LoginForm  />);
      }
    }
  });

  if(document.getElementById('login')) {
    React.render(
      <LoginManager url="" flux={MDE.flux} />,
      document.getElementById('login')
    );
  }
});
