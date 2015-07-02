MDE.Components.Teams = (function() {
  return React.createClass({
    getInitialState: function() {
      return {
        teamsData: this.props.teams
      };
    },
    render: function () {
      return (
        <MDE.Components.DataTable fields={MDE.Constants.Fields.team} initialData={this.state.teamsData} />
      );
    }
  });
})();
