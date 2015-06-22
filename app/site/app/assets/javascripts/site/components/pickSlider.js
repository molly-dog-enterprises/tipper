$(function() {

  var PickSlider = MDE.PickSlider = React.createClass({
    getInitialState: function() {
      var row = this.props.row;
      if(row.home === row.pick_name) {
        return { by: row.by };
      } else {
        return { by: -row.by };
      }
    },
    render: function () {
      var scores = [this.state.by];
      if(this.props.row.home_score) {
        scores.push(this.props.row.home_score - this.props.row.away_score)
      }
      return (
        <div className='slider'>
          {this.props.row.pick_name} by {this.state.by}
          <ReactSlider defaultValue={scores} className='horizontal-slider' min={-50} max={50} snapDragDisabled=true/>
          <div className='team-container'>
            <div className='align-left'>{this.props.row.home} {this.props.row.home_score}</div>
            <div className='align-right'>{this.props.row.away_score} {this.props.row.away}</div>
          </div>
        </div>
      );
    }
  });
});
