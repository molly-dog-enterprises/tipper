$(function() {

  var URLs = window.URLs = { };

  URLs.API = {
    league_event_users: function (row) {
      return '/api/leagues/' + row.id + '/event_users'
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
    user: function (row) {
      return (<a href={URLs.Link.event + '/user/' + row.id}>{row.name}</a>);
    }
  }


});
