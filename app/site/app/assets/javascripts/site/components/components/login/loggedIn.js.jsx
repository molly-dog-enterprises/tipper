MDE.Components.LoggedIn = (function() {

  var FluxMixin = Fluxxor.FluxMixin(React);

  return React.createClass({
    mixins: [FluxMixin],

    getInitialState: function() {
      return {
        userID: localStorage.getItem('userID'),
        authToken: localStorage.getItem('authToken')
      }
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
