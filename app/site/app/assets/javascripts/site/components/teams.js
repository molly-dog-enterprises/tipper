$(function() {

  var Teams = React.createClass({
    render: function () {
      return (
        <DataTable fields={Fields.team} initialDataElement='teams' />
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
