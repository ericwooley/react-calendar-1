'use strict';

var React = require('react');

var CalendarControls = React.createClass({

  _onNext: function() {
    this.props.onNext();
  },

  _onPrev: function() {
    this.props.onPrev();
  },

  render: function() {
    return (
      <div className='clndr-controls'>
        <div onClick={this._onPrev} className='previous-month'>Prev</div>
        <div className='current-month'>{this.props.date.format('MMMM YYYY')}</div>
        <div onClick={this._onNext} className='next-month'>Next</div>
      </div>
    );
  }
});

module.exports = CalendarControls;
