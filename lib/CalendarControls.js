'use strict';

var React = require('react');

var CalendarControls = React.createClass({displayName: "CalendarControls",

  _onNext: function() {
    this.props.onNext();
  },

  _onPrev: function() {
    this.props.onPrev();
  },

  render: function() {
    return (
      React.createElement("div", {className: "clndr-controls"}, 
        React.createElement("div", {onClick: this._onPrev, className: "previous-month"}, "Prev"), 
        React.createElement("div", {className: "current-month"}, this.props.date.format('MMMM YYYY')), 
        React.createElement("div", {onClick: this._onNext, className: "next-month"}, "Next")
      )
    );
  }
});

module.exports = CalendarControls;
