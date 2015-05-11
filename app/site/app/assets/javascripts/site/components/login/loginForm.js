$(function() {
  var FluxMixin = Fluxxor.FluxMixin(React);

  MDE.LoginForm = React.createClass({
    mixins: [FluxMixin],

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
      return (
        <div>
          <div className="menu-item">
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


});
