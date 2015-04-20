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
    var classes = this.props.day.day.classes;
    var classes = classes || '';
    if(classes instanceof Array){
      classes = classes.join(' ');
    }
    classes += ' day'+' day-'+this.props.day.day.date();
    return (
      React.createElement("div", {onClick: this._onClick, className: classes.trim()}, 
        React.createElement("div", {className: "day-content"}, 
          React.createElement("span", {className: 'day-text'}, this.props.day.day.date()), 
          this.props.children
        )
      )
    );
  }
});

module.exports = Day;
