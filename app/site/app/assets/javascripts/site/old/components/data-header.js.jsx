MDE.Components.DataHeader = (function() {
  var HeaderRow = React.createClass({
    render: function () {
      var val;
      if(this.props.field.method) {
        val = this.props.field.method(this.props.data);
      } else {
        val = this.props.data[this.props.field.name];
      }

      return (
        <div className='row'>
          <div className='label'>{this.props.field.header}</div>
          <div className='value'>{val}</div>
        </div>
      );
    }
  });

  return React.createClass({
    render: function () {
      var self = this;
      var rows = this.props.fields.map(function (field) {
        return (<HeaderRow key={field.name} data={self.props.initialData} field={field} />)
      });

      return (<div className='data-header'>{rows}</div>);
    }
  });
})();
