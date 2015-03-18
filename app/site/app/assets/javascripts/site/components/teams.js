$(function() {

  var Teams = React.createClass({
    render: function () {
      var fields = [
        {name: 'name', header: 'Name'},
        {name: 'description', header: 'Description'},
        {name: 'win_count', header: 'Wins'},
      ];

      return (
        <DataTable fields={fields} initialDataElement='teams' />
        );
    }
  });

  if(document.getElementById('teams')) {
    React.render(
      <Teams  />,
      document.getElementById('teams')
    );
  }
});
