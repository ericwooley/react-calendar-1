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
    console.o
    let classes = this.props.day.classes || '';
    if(typeof this.props.day.classes === 'array'){
      classes = this.props.day.classes.join(' ');
    }
    classes += ' day'+' day-'+this.props.day.day.date();
    return (
      <div onClick={this._onClick} className={classes.trim()}>
        <span className={'day-text'}>{this.props.day.day.date()}</span>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Day;
