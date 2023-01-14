import DatePicker from 'components/datePicker';
import PlaceList from 'components/placeList';
import TimeLine from 'components/timeline';
import { useRouter } from 'next/router'
import { useState } from 'react';

import SampleData from "../api/plans.json";

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const Plan = () => {
  const router = useRouter()
  const { pid } = router.query

  var id = parseInt(pid as string, 10);

  const plan = SampleData.Plans.at(id);

  let [daysNum, setDaysNum] = useState(0)

  return (
    <main>
      <DndProvider backend={HTML5Backend}>
        <div>
          <p>Select Days</p>
          {/* <DatePicker getDaysNum={setDaysNum}></DatePicker> */}
          <TimeLine daysNum={4}></TimeLine>
        </div>
        <div className='sticky bottom-0 bg-white' style={{ boxShadow: "0px -5px 33px -13px rgba(0,0,0,0.75);" }}>
          {plan ? <PlaceList places={plan.Locations}></PlaceList> : null}
        </div>
      </DndProvider>
    </main >
  )
}

export default Plan