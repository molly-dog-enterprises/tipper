$(function() {

  var User = React.createClass({
    render: function () {
      return (
        <div>
          {URLs.Link.leagues(null, 'Back to leagues')}
          <DataHeader fields={Fields.user} initialDataElement='user' />
          <DataTable fields={Fields.guesses} initialDataElement='user' url={URLs.API.user_guesses} />
        </div>
      );
    }
  });

  if(document.getElementById('user')) {
    React.render(
      <User url="" />,
      document.getElementById('user')
    );
  }
});
