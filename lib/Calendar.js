'use strict';

var React = require('react');
var moment = require('moment');
var Day = require('./Day');
var CalendarControls = require('./CalendarControls');

var Calendar = React.createClass({displayName: "Calendar",

  propTypes: {
    weekOffset: React.PropTypes.number,
    forceSixRows: React.PropTypes.bool,
    showDaysOfWeek: React.PropTypes.bool,
  },

  getDefaultProps: function() {
    return {
      weekOffset: 0,
      forceSixRows: false,
      showDaysOfWeek: false,
      onPickDate: null
    };
  },
  componentWillReceiveProps:function(nextProps) {
    if (!this.props.date.isSame(nextProps.date)) {
      this.setState({
        date: nextProps.date
      })
    }
  },
  getInitialState: function() {
    if(this.props.date instanceof Date) {
      this.props.date = moment(this.props.date);
    }
    return {
      date: this.props.date || moment(),
    };
  },

  next: function() {
    this.setState({date: this.state.date.add(1, 'months')});
  },

  prev: function() {
    this.setState({date: this.state.date.subtract(1, 'months')});
  },

  days: function() {
    var days = [];
    var date = this.state.date.startOf('month');
    var diff = date.weekday() - this.props.weekOffset;
    if (diff < 0) diff += 7;

    var i, day;
    for (i = 0; i < diff; i++) {
      day = moment([this.state.date.year(), this.state.date.month(), i-diff+1])
      days.push({day: day, classes: 'prev-month'});
    }

    var numberOfDays = date.daysInMonth();
    for (i = 1; i <= numberOfDays; i++) {
      day = moment([this.state.date.year(), this.state.date.month(), i]);
      days.push({day: day, classes: 'this-month'});
    }

    i = 1;
    while (days.length % 7 !== 0) {
      day = moment([this.state.date.year(), this.state.date.month(), numberOfDays+i]);
      days.push({day: day, classes: 'next-month'});
      i++;
    }

    if (this.props.forceSixRows && days.length !== 42) {
      var start = moment(days[days.length-1].date).add(1, 'days');
      while (days.length < 42) {
        days.push({day: moment(start), classes: 'next-month'});
        start.add(1, 'days');
      }
    }

    return days;
  },

  daysOfWeek: function() {
    var daysOfWeek = this.props.daysOfWeek;
    if (!daysOfWeek) {
      daysOfWeek = [];
      for (var i = 0; i < 7; i++) {
        daysOfWeek.push(moment().weekday(i).format('dd').charAt(0));
      }
    }
    return daysOfWeek;
  },

  render: function() {
    var now = new moment();
    var today = now.format('YYYY-MM-DD');
    return (
      React.createElement("div", {className: "clndr"}, 
        React.createElement(CalendarControls, {date: this.state.date, onNext: this.next, onPrev: this.prev}), 
        React.createElement("div", {className: "clndr-grid"}, 
          React.createElement("div", {className: "day-headers"}, 
            this.props.showDaysOfWeek && this.daysOfWeek().map(function(day, i)  {
              return React.createElement("div", {key: 'weekday-' + i}, day);
            })
          ), 
          React.createElement("div", {className: "days"}, 
            this.days().map(function(day, i)  {
              day.day.classes = [];
              if(day.day.isValid())
                day.day.classes.push(day.day.format('YYYY-MM-DD'));
              if(day.day.isSame(today)){
                day.day.classes.push('today');
              }
              return React.createElement(Day, {key: 'day-' + i, day: day, onClick: this.props.onPickDate});
            }.bind(this))
          ), 
          React.createElement("div", {className: "clearfix"})
        )
      )
    );
  }
});

module.exports = Calendar;
