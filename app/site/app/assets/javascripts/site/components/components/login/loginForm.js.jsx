MDE.Components.LoginForm = (function() {
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
      return flux.store("LoginStore").getErrors();
    },

    getInitialState: function() {
      return {
        name: '',
        password: ''
      };
    },
    updateNameText: function(event) {
      this.setState({ name: event.target.value });
    },
    updatePasswordText: function(event) {
      this.setState({ password: event.target.value });
    },
    render: function () {
      var errors = '';
      if(this.state.errors) {
        errors = this.state.errors.map(function (error) {
          return <div className='errors'>{error}</div>
        });
      }

      return (
        <div>
          <div className="menu-heading">
            Account
          </div>
          <div className="menu-item">
            {errors}
            Name
            <input type='text' value={this.state.name} onChange={this.updateNameText} />
            <br/>
            Password
            <input type='password' value={this.state.password} onChange={this.updatePasswordText}/>
            <br/>

            <input type='submit' value="Login" onClick={this.signIn} />
            <a href='#' onClick={this.cancel}>Cancel</a>
          </div>
        </div>
        )
    },
    cancel: function() {
      this.getFlux().actions.cancel();
    },
    signIn: function() {
      this.getFlux().actions.signIn(this.state.name, this.state.password);

    }
  });


})();
