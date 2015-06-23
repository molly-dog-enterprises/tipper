$(function() {

  var Fields = MDE.Fields = {};

  Fields.guesses = [
    {name: 'match', header: 'Match'},
    {name: 'result', header: 'Result'},
    {name: 'guess', header: 'Your selection'},
    {name: 'scope', header: 'Points'},
  ];

  Fields.league = [
    {name: 'name', header: 'Name', method: MDE.URLs.Link.league},
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
    {name: 'name', header: 'Name', method: MDE.URLs.Link.user},
    {name: 'email', header: 'e-mail'},
    {name: 'team', header: 'Favourite Team'},
  ];

  Fields.picks = [
    {name: 'start_time', header: 'Start'},
//    {name: 'home', header: 'Home'},
//    {name: 'away', header: 'Away'},
    {name: 'location', header: 'Location'},
    {name: 'pick', header: 'Pick', method: function(row) {
      return <MDE.PickSlider row={row} />
    }}
  ];

//  id: guess.id,
//    team: guess.team.try(:id),
//  by: guess.by,
//    start_time: guess.match.start_time


});
