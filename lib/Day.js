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
    let classes = this.props.day.classes || '';
    if(typeof this.props.day.classes === 'array'){
      classes = this.props.day.classes.join(' ');
    }
    classes += ' day'+' day-'+this.props.day.day.date();
    return (
      React.createElement("div", {onClick: this._onClick, className: classes.trim()}, 
        React.createElement("span", {className: 'day-text'}, this.props.day.day.date())
      )
    );
  }
});

module.exports = Day;
