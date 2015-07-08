MDE.Components.LoggedIn = (function() {
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
      return flux.store("LoginStore").getUserDetails();
    },

    render: function () {
      return (
        <div>
          <div className="menu-heading">
            Account ({this.state.userID})
          </div>
          <div className="menu-item">
            <a href="#" onClick={this.signOut}>Sign Out</a>
          </div>
          <div className="menu-item">
            {MDE.Constants.URLs.Link.picks()}
          </div>
          <div className="menu-item">
            <a href={"/users/" + this.state.userID}>Preferences</a>
          </div>
        </div>
      )
    },
    signOut: function() {
      this.getFlux().actions.logout();
    }
  });

})();
