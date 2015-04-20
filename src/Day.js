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
    var classes = this.props.day.day.classes;
    var classes = classes || '';
    if(classes instanceof Array){
      classes = classes.join(' ');
    }
    classes += ' day'+' day-'+this.props.day.day.date();
    return (
      <div onClick={this._onClick} className={classes.trim()}>
        <div className='day-content'>
          <span className={'day-text'}>{this.props.day.day.date()}</span>
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Day;
