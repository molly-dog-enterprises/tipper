$(function() {

  var DataTableRow = React.createClass({
    render: function () {
      var self = this;
      var fields = this.props.fields.map(function (field) {
        return (
          <td>{self.props.row[field.name]}</td>
          )
      });
      return (
        <tr key={self.props.row.id}>{fields}</tr>
      );
    }
  });

  var DataTableHeader = React.createClass({
    render: function () {
      var fields = this.props.fields.map(function (field) {
        return (
          <th>{field.header}</th>
          )
      });

      return (
        <thead>
          <tr>{fields}</tr>
        </thead>
      );
    }
  });

  var DataTable = window.DataTable = React.createClass({
    getInitialState: function() {
      return { data: [] };
    },
    componentDidMount: function() {
      this.setDataState = function(data) {
        this.setState({data: data})
      };

      this.setDataState($('#' + this.props.initialDataElement).data('initial'));
    },
    render: function () {
      console.log('rendering');
      var self = this;
      var rows = this.state.data.map(function (row) {
        return (
          <DataTableRow row={row} fields={self.props.fields} />
        )
      });

      return (
        <table>
          <DataTableHeader fields={this.props.fields} />
          {rows}
        </table>
      );
    }
  });

});
