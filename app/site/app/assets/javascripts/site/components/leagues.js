$(function() {

  var LeaguesTableRow = React.createClass({
    render: function () {
      return (
        <tr>
          <td>{this.props.name}</td>
          <td>{this.props.description}</td>
          <td>{this.props.player_count}</td>
          <td>{this.props.password_protected ? 'YES' : 'NO'}</td>
        </tr>
      );
    }
  });

  var LeaguesTableHeader = React.createClass({
    render: function () {
      return (
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Player Count</th>
            <th>Password Required</th>
          </tr>
        </thead>
      );
    }
  });

  var Leagues = React.createClass({
    getInitialState: function() {
      return { data: [] };
    },
    componentDidMount: function() {
      this.setDataState = function(data) {
        this.setState({data: data})
      };

      this.setDataState($('#leagues').data('initial'));
    },
    render: function () {
      console.log('rendering');
      var rows = this.state.data.map(function (result) {
        return (
          <LeaguesTableRow name={result.name} description={result.description} player_count={result.player_count} password_protected={result.password_protected} />
        )
      });

      return (
        <table>
          <LeaguesTableHeader />
          {rows}
        </table>
      );
    }
  });

  React.render(
    <Leagues url="" />,
    document.getElementById('leagues')
  );

});
