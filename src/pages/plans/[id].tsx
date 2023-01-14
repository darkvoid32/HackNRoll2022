import PlaceList from 'components/placeList';
import TimeLine from 'components/timeline';
import { useRouter } from 'next/router'
import { useState } from 'react';

import SampleData from "../api/plans.json";

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Calendar, CalendarChangeParams } from 'primereact/calendar';
import { start } from 'repl';


const Plan = () => {
  const router = useRouter()
  const { pid } = router.query

  var id = parseInt(pid as string, 10);

  const plan = SampleData.Plans.at(id);

  const [dateRange, setDateRange] = useState<Date[] | null>(null)

  const [dateArray, setDateArray] = useState([new Date()])

  return (
    <main>
      <DndProvider backend={HTML5Backend}>
        <div>
          <p>Select Dates</p>
          <Calendar
            selectionMode="range"
            value={dateRange}
            onChange={(e: CalendarChangeParams) => {
              const tem = e.value as Date[];
              setDateRange(tem);

              var dateArray = [];
              var startDate = tem[0];
              var endDate = tem[tem.length - 1];
              while (startDate <= endDate) {
                dateArray.push(new Date(startDate));
                startDate.setDate(startDate.getDate() + 1);
              }
              setDateArray(dateArray);
            }}>
          </Calendar>
          <TimeLine dates={dateArray}></TimeLine>
        </div>
        <div className='sticky bottom-0 bg-white' style={{ boxShadow: "0px -5px 33px -13px rgba(0,0,0,0.75)" }}>
          {plan ? <PlaceList places={plan.Locations}></PlaceList> : null}
        </div>
      </DndProvider>
    </main >
  )
}

export default Plan