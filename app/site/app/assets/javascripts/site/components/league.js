$(function() {

  var League = React.createClass({
    render: function () {
      return (
        <div>
          {URLs.Link.leagues(null, 'Back to leagues')}
          <DataHeader fields={Fields.league} initialDataElement='league' />
          <DataTable fields={Fields.user} initialDataElement='league' url={URLs.API.league_event_users} />
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
