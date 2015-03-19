$(function() {

  var URLs = window.URLs = { };

  URLs.API = {
    league_event_users: function (row) {
      return '/api/leagues/' + row.id + '/event_users'
    }
  };

  URLs.Link = {
    league: function (row) {
      return (<a href={'leagues/' + row.id}>{row.name}</a>)
    },
    user: function (row) {
      return (<a href={'user/' + row.id}>{row.name}</a>)
    }
  }


});
