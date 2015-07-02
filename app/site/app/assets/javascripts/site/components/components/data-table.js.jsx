MDE.Components.DataTable = (function() {
  function dataRequest(url, binding) {
    $.ajax({
      url: url,
      dataType: 'json',
      success: function (data) {
        this.setState({data: data});
      }.bind(binding),
      error: function (xhr, status, err) {
        console.error(url, status, err.toString());
      }.bind(binding)
    });
  }

  var DataTableRow = React.createClass({
    statics: {
      fieldMethod: function(method, field_name) {
        return method || function(row) {
          return row[field_name];
        }
      }
    },
    render: function () {
      var self = this;
      var fields = this.props.fields.map(function (field) {
        var val = DataTableRow.fieldMethod(field.method, field.name)(self.props.row),
          key = self.props.row.id + '-' + field.name;
        return (<td key={key}>{val}</td>)


      });
      return (
        <tr key={self.props.row.id}>{fields}</tr>
      );
    }
  });

  var DataTableHeader = React.createClass({
    render: function () {
      var fields = this.props.fields.map(function (field) {
        return (<th key={field.name}>{field.header}</th>)
      });

      return (
        <thead>
          <tr>{fields}</tr>
        </thead>
      );
    }
  });

  return React.createClass({
    render: function () {
      var self = this;
      var rows = this.props.initialData.map(function (row) {
        return (
          <DataTableRow key={row.id} row={row} fields={self.props.fields} />
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
})();
