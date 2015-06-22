$(function() {

  var Picks = React.createClass({
    getInitialState: function() {
      return {
        picksData: $('#picks').data('initial'),
        matchesData: $('#picks').data('initial')
      };
    },
    render: function () {
      return (
        <MDE.DataTable fields={MDE.Fields.picks} initialData={this.state.picksData} />
        );
    },
    currentPicks: function() {
      return [
        this.state.picksData[0],
        this.state.picksData[1]
      ]
    }
  });


  if(document.getElementById('picks')) {
    React.render(
      <Picks />,
      document.getElementById('picks')
    );
  }
});
