$(function() {

  var Leagues = React.createClass({
    render: function () {

      return (
        <DataTable fields={Fields.league} initialDataElement='leagues' />
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
