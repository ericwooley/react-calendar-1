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


React.render(
  <Calendar showDaysOfWeek={true}
            dayChildren={dateMap}
            date={new Date()}
            onPickDate={datePicked} />,
  document.getElementById('calendar')
);
