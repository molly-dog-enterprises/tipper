$(function() {
  var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

  var LoginForm = MDE.LoginForm = React.createClass({
    mixins: [FluxMixin],

    render: function () {
      return (
        <div>
          <div className="menu-item">
            Name
            <input type='text' />
            <br/>
            Password
            <input type='text' />
            <br/>

            <input type='submit' value="Login" />
            <a href='#' onClick={this.cancel}>Cancel</a>
          </div>
        </div>
        )
    },
    cancel: function() {
      this.getFlux().actions.cancel();
    }
  });

  var LoggedOut = MDE.LoggedOut = React.createClass({
    mixins: [FluxMixin],

    render: function () {
      return (
        <div>
          <div className="menu-item">
            <a href="#" onClick={this.login}>Sign in</a>
          </div>
          <div className="menu-item">
            <a href="#" onClick={this.signUp}>Sign Up</a>
          </div>
        </div>
      )
    },
    login: function() {
      this.getFlux().actions.login();
    },
    signUp: function() {
      this.getFlux().actions.signUp();
    }

  });

  var UserDetails = MDE.UserDetails = React.createClass({
    getInitialState: function() {
      return {
        userID: localStorage.getItem('userID'),
        authToken: localStorage.getItem('authToken')
      }
    },

    render: function () {
      return (
        <div>
          <div className="menu-item">
            <a href="#" onClick={this.signOut}>Sign Out</a>
          </div>
          <div className="menu-item">
            <a href="#" onClick="#">Preferences</a>
          </div>
        </div>
      )
    }
  });

  var Login = MDE.LoginManager = React.createClass({
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
        return (<UserDetails />);
      }
      if(this.state.state === 'loggedOut') {
        return (<LoggedOut />);
      }
      if(this.state.state === 'login') {
        return (<LoginForm  />);
      }
    }
  });

  if(document.getElementById('login')) {
    React.render(
      <Login url="" flux={MDE.flux} />,
      document.getElementById('login')
    );
  }
});
