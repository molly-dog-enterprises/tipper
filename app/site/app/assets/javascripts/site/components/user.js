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

      var url = URLs.API.league_event_users(this.state.leagueData);
      AJAXER(url).success(function(data) {
        self.setState({usersData: data});
      })
    },


    render: function () {
      return (
        <div>
          {URLs.Link.leagues(null, 'Back to leagues')}
          <DataHeader fields={Fields.user} initialData={this.state.userData} />
          <DataTable fields={Fields.guesses} initialData={this.state.guessesData} />
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
