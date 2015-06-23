$(function() {

  var Leagues = React.createClass({
    getInitialState: function() {
      return {
        leaguesData: $('#leagues').data('initial')
      };
    },
    render: function () {
      return (
        <MDE.DataTable fields={MDE.Fields.league} initialData={this.state.leaguesData} />
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
