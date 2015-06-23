$(function() {

  var League = React.createClass({
    getInitialState: function() {
      return {
        usersData: [],
        leagueData: $('#league').data('initial')
      };
    },
    componentDidMount: function() {
      var self = this;
      this.setUsersState = function(data) {
        this.setState({usersData: data})
      };

      var url = MDE.URLs.API.league_event_users(this.state.leagueData);
      MDE.AJAX_REQUESTER(url).success(function(data) {
        self.setState({usersData: data});
      })
    },
    render: function () {
      return (
        <div>
          {MDE.URLs.Link.leagues(null, 'Back to leagues')}
          <MDE.DataHeader fields={MDE.Fields.league} initialData={this.state.leagueData} />
          <MDE.DataTable fields={MDE.Fields.user} initialData={this.state.usersData} />
        </div>
      );
    }
  });

  if(document.getElementById('league')) {
    React.render(
      <League url="" />,
      document.getElementById('league')
    );
  }
});
