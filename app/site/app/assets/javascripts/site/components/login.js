$(function() {
  var LoginForm = MDE.LoginForm = React.createClass({
    render: function () {
      return (
        <div>
          <div className="menu-item">
            <a href="#">Sign in</a>
          </div>
          <div className="menu-item">
            <a href="#">Sign Up</a>
          </div>
        </div>
      )
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
            <a href="#">Sign Out</a>
          </div>
          <div className="menu-item">
            <a href="#">Preferences</a>
          </div>
        </div>
      )
    }
  });

  var Login = MDE.LoginManager = React.createClass({
    getInitialState: function() {
      return {
        currentStatus: localStorage.getItem('userID') === null ? 'loggedOut' : 'loggedIn'
      }
    },

    render: function () {
      if(this.state.currentStatus === 'loggedIn') {
        return (
          <UserDetails  />
        )
      } else {
        return (
          <LoginForm  />
        )
      }
    }
  });

  if(document.getElementById('login')) {
    React.render(
      <Login url="" />,
      document.getElementById('login')
    );
  }
});
