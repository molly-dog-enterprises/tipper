$(function() {

  var Leagues = React.createClass({
    render: function () {
      var fields = [
        {name: 'name', header: 'Name'},
        {name: 'description', header: 'Description'},
        {name: 'player_count', header: 'Player Count'},
        {name: 'password_protected', header: 'Password Required', method: function(val) { return val ? 'YES' : 'NO' }},
      ];

      return (
        <DataTable fields={fields} initialDataElement='leagues' />
        );
    }
  });


  React.render(
    <Leagues url="" />,
    document.getElementById('leagues')
  );

});
