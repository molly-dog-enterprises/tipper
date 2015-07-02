MDE.Constants.Fields = (function() {

  var Fields = {};

  Fields.guesses = [
    {name: 'match', header: 'Match'},
    {name: 'result', header: 'Result'},
    {name: 'guess', header: 'Your selection'},
    {name: 'scope', header: 'Points'},
  ];

  Fields.league = [
    {name: 'name', header: 'Name', method: MDE.Constants.URLs.Link.league},
    {name: 'description', header: 'Description'},
    {name: 'player_count', header: 'Player Count'},
    {name: 'password_protected', header: 'Password Required', method: function(row) { return row.password_protected ? 'YES' : 'NO' }},
  ];

  Fields.team = [
    {name: 'name', header: 'Name'},
    {name: 'description', header: 'Description'},
    {name: 'win_count', header: 'Wins'},
  ];

  Fields.user = [
    {name: 'name', header: 'Name', method: MDE.Constants.URLs.Link.user},
    {name: 'email', header: 'e-mail'},
    {name: 'team', header: 'Favourite Team'},
  ];

  Fields.picks = [
    {name: 'start_time', header: 'Start'},
//    {name: 'home', header: 'Home'},
//    {name: 'away', header: 'Away'},
    {name: 'location', header: 'Location'},
    {name: 'pick', header: 'Pick', method: function(row) {
      return <MDE.Constants.PickSlider row={row} />
    }}
  ];

  return Fields;
})();
