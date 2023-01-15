import PlaceList from 'components/placeList';
import TimeLine from 'components/timeline';
import { useRouter } from 'next/router'

import SampleData from "../api/plans.json";

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const Plan = () => {
  const router = useRouter()
  const { pid } = router.query

  var id = parseInt(pid as string, 10);

  const plan = SampleData.Plans.at(id);

  var tem = new Array();
  var startDate = new Date(plan!.startDate);
  var endDate = new Date(plan!.endDate);
  while (startDate <= endDate) {
    tem.push(new Date(startDate));
    startDate.setDate(startDate.getDate() + 1);
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ fontWeight: "400", fontSize: "30px" }}>{plan?.title}</div>
      <div>
        <TimeLine dates={tem}></TimeLine>
      </div>
      <div style={{ boxShadow: "0 -5px 5px -5px #333", position: "sticky", bottom: "0", backgroundColor: "white" }}>
        {plan ? <PlaceList places={plan.Locations}></PlaceList> : null}
      </div>
    </DndProvider>
  )
}

export default Plan