$(function() {

  var League = React.createClass({
    render: function () {
      var fields = [
        {name: 'name', header: 'Name', method: function(row) { return (<a href={'user/' + row.id}>{row.name}</a>)}},
        {name: 'email', header: 'e-mail'},
        {name: 'team', header: 'Favourite Team'},
      ];

      return (
        <div>
          <a href='/leagues'>back to leagues</a>
          <DataTable fields={fields} initialDataElement='league' />
        </div>
      );
    }
  });

  // TODO: This is really rendering a user list not a league...
  //       This should be a sub component of the league not the main thing..
  if(document.getElementById('league')) {
    React.render(
      <League url="" />,
      document.getElementById('league')
    );
  }
});
