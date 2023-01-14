import React, { ChangeEvent, useState } from 'react';

import { Calendar, CalendarChangeParams } from 'primereact/calendar';

export default function DatePicker(props: { getDaysNum: (arg0: number) => void; }) {
  let [daysNum, setDaysNum] = useState(0)
  let [dates, setDates] = useState([new Date])

  const handleDateChange = (e: CalendarChangeParams) => {
    setDates(e.value as Date[]);
  }

  return (
    <div>
      <Calendar
        selectionMode="range"
        value={dates}
        onChange={handleDateChange}>
      </Calendar>
    </div>
  );
}