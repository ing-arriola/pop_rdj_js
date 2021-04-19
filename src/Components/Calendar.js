import React,{ useState } from 'react';
import moment from 'moment';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

function getWeekDays(weekStart) {
  const days = [weekStart];
  for (let i = 1; i < 7; i += 1) {
    days.push(
      moment(weekStart)
        .add(i, 'days')
        .toDate()
    );
  }
  return days;
}

function getWeekRange(date) {
  return {
    from: moment(date)
      .startOf('week')
      .toDate(),
    to: moment(date)
      .endOf('week')
      .toDate(),
  };
}

const  Calendar = () => {
  

  const [hoverRange,setHoverRange] = useState(undefined)
  const [selectedDays,setSelectedDays] = useState([])

  const handleDayChange = (date) => {
    setSelectedDays(getWeekDays(getWeekRange(date).from))
  }

  const handleDayEnter = date => {
    setHoverRange(getWeekRange(date))
  }

  const handleDayLeave = () => {
    setHoverRange(undefined)
  }

  const handleWeekClick = (weekNumber, days, e) => {
    setSelectedDays(days)
  }


    const daysAreSelected = selectedDays.length > 0;

    const modifiers = {
      hoverRange,
      selectedRange: daysAreSelected && {
        from: selectedDays[0],
        to: selectedDays[6],
      },
      hoverRangeStart: hoverRange && hoverRange.from,
      hoverRangeEnd: hoverRange && hoverRange.to,
      selectedRangeStart: daysAreSelected && selectedDays[0],
      selectedRangeEnd: daysAreSelected && selectedDays[6],
    };

    return (
      <div className="SelectedWeekExample">
        <DayPicker
          selectedDays={selectedDays}
          showWeekNumbers
          showOutsideDays
          modifiers={modifiers}
          onDayClick={handleDayChange}
          onDayMouseEnter={handleDayEnter}
          onDayMouseLeave={handleDayLeave}
          onWeekClick={handleWeekClick}
        />
        {selectedDays.length === 7 && (
          <div>
            {moment(selectedDays[0]).format('LL')} –{' '}
            {moment(selectedDays[6]).format('LL')}
          </div>
        )}

      </div>
    );

}

export default Calendar