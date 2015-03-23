$(function() {
  function dataRequest(url, binding) {
    $.ajax({
      url: url,
      dataType: 'jsonp',
      success: function (data) {
        this.setState({data: data});
      }.bind(binding),
      error: function (xhr, status, err) {
        console.error(url, status, err.toString());
      }.bind(binding)
    });

  }

  var DataTableRow = React.createClass({
    render: function () {
      var self = this;
      var fields = this.props.fields.map(function (field) {
        var val,
          key = self.props.row.id + '-' + field.name;

        if(field.method) {
          val = field.method(self.props.row);
        } else {
          val = self.props.row[field.name];
        }

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

  var DataTable = window.DataTable = React.createClass({
    getInitialState: function() {
      return { data: [] };
    },
    componentDidMount: function() {
      this.setDataState = function(data) {
        this.setState({data: data})
      };

      var element = $('#' + this.props.initialDataElement).data('initial');

      if (this.props.url) {
        var url = this.props.url(element);
        dataRequest(url, this);
      } else if (this.props.initialDataElement) {
        this.setDataState(element);
      }
    },
    render: function () {
      var self = this;
      var rows = this.state.data.map(function (row) {
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
});
