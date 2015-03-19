$(function() {

  var League = React.createClass({
    render: function () {
      return (
        <div>
          <a href='/leagues'>back to leagues</a>
          <DataHeader fields={Fields.league} initialDataElement='league' />
          <DataTable fields={Fields.user} initialDataElement='' url={URLs.API.league_event_users} />
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
