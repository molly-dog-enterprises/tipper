$(function() {

  var Leagues = React.createClass({
    render: function () {
      var fields = [
        {name: 'name', header: 'Name', method: function(row) { return (<a href={'leagues/' + row.id}>{row.name}</a>)}},
        {name: 'description', header: 'Description'},
        {name: 'player_count', header: 'Player Count'},
        {name: 'password_protected', header: 'Password Required', method: function(row) { return row.password_protected ? 'YES' : 'NO' }},
      ];

      return (
        <DataTable fields={fields} initialDataElement='leagues' />
        );
    }
  });


  if(document.getElementById('leagues')) {
    React.render(
      <Leagues url="" />,
      document.getElementById('leagues')
    );
  }
});
