$(function() {

  var URLs = MDE.URLs = { };

  URLs.API = {
    league_event_users: function (row) {
      return '/api/leagues/' + row.id + '/event_users'
    },
    user_guesses: function (row) {
      return '/api/users/' + row.id + '/guesses'
    }
  };

  URLs.Link = {
    event: '/123',
    league: function (row) {
      return (<a href={URLs.Link.event + '/leagues/' + row.id}>{row.name}</a>);
    },
    leagues: function(row, text) {
      return (<a href={URLs.Link.event + '/leagues'}>{text || 'leagues'}</a>);
    },
    picks: function () {
      return (<a href={URLs.Link.event + '/picks/'}>picks</a>);
    },
    user: function (row) {
      return (<a href={URLs.Link.event + '/users/' + row.id}>{row.name}</a>);
    }
  }


});
