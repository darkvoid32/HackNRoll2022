import PlaceList from 'components/placeList';
import TimeLine from 'components/timeline';
import { useRouter } from 'next/router'
import { useState } from 'react';

import SampleData from "../api/plans.json";

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Calendar, CalendarChangeParams } from 'primereact/calendar';

const Plan = () => {
  const router = useRouter()
  const { pid } = router.query

  var id = parseInt(pid as string, 10);

  const plan = SampleData.Plans.at(id);

  const [dateRange, setDateRange] = useState<Date[]>()

  var tem = new Array();
  var startDate = new Date(plan!.startDate);
  var endDate = new Date(plan!.endDate);
  while (startDate <= endDate) {
    tem.push(new Date(startDate));
    startDate.setDate(startDate.getDate() + 1);
  }

  return (
    <main>
      <DndProvider backend={HTML5Backend}>
        <div>
          <p>Select Dates</p>
          <Calendar
            selectionMode="range"
            value={dateRange}
            onChange={(e: CalendarChangeParams) => {
              setDateRange(e.value as Date[]);
            }}>
          </Calendar>
          <TimeLine dates={tem}></TimeLine>
        </div>
        <div className='sticky bottom-0 bg-white' style={{ boxShadow: "0px -5px 33px -13px rgba(0,0,0,0.75)" }}>
          {plan ? <PlaceList places={plan.Locations}></PlaceList> : null}
        </div>
      </DndProvider>
    </main >
  )
}

export default Plan