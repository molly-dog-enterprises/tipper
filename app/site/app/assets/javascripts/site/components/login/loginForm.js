$(function() {
  var FluxMixin = Fluxxor.FluxMixin(React);

  MDE.LoginForm = React.createClass({
    mixins: [FluxMixin],

    render: function () {
      return (
        <div>
          <div className="menu-item">
          Name
            <input type='text' value={this.state.name} />
            <br/>
          Password
            <input type='password' value={this.state.name} />
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

    }
  });


});
