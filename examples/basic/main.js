var React = require('react');
var {Calendar} = require('../../lib/index');
var moment = require('moment');
// require('moment/locale/nb');

function datePicked(date) {
  console.log(date);
}

let dateMap = {

};
dateMap[new Date().toDateString()] = React.createElement('span', {}, 'test');

var baseDate = new moment();
React.render(
  <Calendar showDaysOfWeek={true}
            dayChildren={dateMap}
             forceSixRows={true}
            date={baseDate}
            selectedDate={new moment().add({day: 2})}
            onPickDate={datePicked}
             />,
  document.getElementById('calendar')
);
