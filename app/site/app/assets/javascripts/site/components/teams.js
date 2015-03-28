$(function() {
  var Teams = React.createClass({
    getInitialState: function() {
      return {
        teamsData: $('#teams').data('initial')
      };
    },
    render: function () {
      return (
        <MDE.DataTable fields={MDE.Fields.team} initialData={this.state.teamsData} />
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
