$(function() {
  MDE.LoggedIn = React.createClass({
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
    },
    signOut: function() {
      this.getFlux().actions.logout();
    }
  });

});
