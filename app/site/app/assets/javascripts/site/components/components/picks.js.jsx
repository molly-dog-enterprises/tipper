MDE.Components.Picks = React.createClass({
  getInitialState: function() {
    return {
      picksData: this.props.picks,
      matchesData: this.props.matches
    };
  },
  render: function () {
    return (
      <MDE.Components.DataTable fields={MDE.Constants.Fields.picks} initialData={this.state.picksData} />
    );
  },
  currentPicks: function() {
    return [
      this.state.picksData[0],
      this.state.picksData[1]
    ]
  }
});
