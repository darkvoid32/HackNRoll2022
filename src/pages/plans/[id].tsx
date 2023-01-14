import DatePicker from 'components/datePicker';
import PlaceList from 'components/placeList';
import TimeLine from 'components/timeline';
import { useRouter } from 'next/router'
import { useState } from 'react';

import SampleData from "../api/plans.json";

const Plan = () => {
  const router = useRouter()
  const { pid } = router.query

  var id = parseInt(pid as string, 10);

  const plan = SampleData.Plans.at(id);

  let [daysNum, setDaysNum] = useState(0)

  return (
    <main>
      <div>
        <p>Select Days</p>
        <DatePicker getDaysNum={setDaysNum}></DatePicker>
        <TimeLine daysNum={daysNum}></TimeLine>
      </div>
      {plan ? <PlaceList places={plan.Locations}></PlaceList> : null}
    </main >
  )
}

export default Plan