'use strict';

var React = require('react');

var Day = React.createClass({displayName: "Day",

  getDefaultProps: function() {
    return {
      classes: []
    };
  },

  _onClick: function() {
    if (this.props.onClick)
      this.props.onClick(this.props.day.day);
  },

  render: function() {
    this.props.day.classes.push('day')
    return (
      React.createElement("div", {onClick: this._onClick, className: this.props.day.classes.join(' ')}, 
        React.createElement("span", {className: 'day-number'}, this.props.day.day.date())
      )
    );
  }
});

module.exports = Day;
