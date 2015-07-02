MDE.Components.Leagues = (function() {
  return React.createClass({
    getInitialState: function() {
      return {
        leaguesData: this.props.leagues
      };
    },
    render: function () {
      return (
        <MDE.Components.DataTable fields={MDE.Constants.Fields.league} initialData={this.state.leaguesData} />
        );
    }
  });
})();
