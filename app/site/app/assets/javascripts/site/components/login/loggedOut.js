$(function() {
  var FluxMixin = Fluxxor.FluxMixin(React);

  MDE.LoggedOut = React.createClass({
    mixins: [FluxMixin],

    render: function () {
      return (
        <div>
          <div className="menu-heading">
            Account
          </div>
          <div className="menu-item">
            <a href="#" onClick={this.login}>Sign in</a>
          </div>
          <div className="menu-item">
            <a href="/signup">Sign Up</a>
          </div>
        </div>
        )
    },
    login: function() {
      this.getFlux().actions.login();
    },
  });
});
