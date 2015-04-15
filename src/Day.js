'use strict';

var React = require('react');

var Day = React.createClass({

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
    let classes = this.props.day.classes;
    if(typeof this.props.day.classes === 'array'){
      this.props.day.classes.push('day')
      classes = this.props.day.classes.join(' ');
    }
    return (
      <div onClick={this._onClick} className={classes}>
        <span className={'day-number'}>{this.props.day.day.date()}</span>
      </div>
    );
  }
});

module.exports = Day;
