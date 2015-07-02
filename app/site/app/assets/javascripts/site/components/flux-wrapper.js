// Helper class to push flux object off MDE into properties of rendered component.
// this is required as react-rails does not provide a native interface for this functionality
MDE.Components.FluxWrapper = (function() {

  return React.createClass({
    render: function () {
      var props = $.extend({}, this.props.elementProps || {}, {flux: MDE.flux});
      return (
        React.createElement(
          eval(this.props.elementClass),
          props
        )
      );
    }
  });
})();
