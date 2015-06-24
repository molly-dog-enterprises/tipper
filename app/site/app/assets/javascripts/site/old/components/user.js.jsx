$(function() {
  var User = React.createClass({
    getInitialState: function() {
      return {
        guessesData: [],
        userData: $('#user').data('initial')
      };
    },
    componentDidMount: function() {
      var self = this;
      this.setUsersState = function(data) {
        this.setState({usersData: data})
      };

      var url = MDE.Constants.URLs.API.league_event_users(this.state.leagueData);
      MDE.AJAX_REQUESTER(url).success(function(data) {
        self.setState({usersData: data});
      })
    },


    render: function () {
      return (
        <div>
          {MDE.Constants.URLs.Link.leagues(null, 'Back to leagues')}
          <MDE.Components.DataHeader fields={MDE.Constants.Fields.user} initialData={this.state.userData} />
          <MDE.Components.DataTable fields={MDE.Constants.Fields.guesses} initialData={this.state.guessesData} />
        </div>
      );
    }
  });

  if(document.getElementById('user')) {
    React.render(
      <User url="" />,
      document.getElementById('user')
    );
  }
});
