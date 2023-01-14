import { NextPage } from "next";

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import TimelineDrop from "./timelineDrop";

interface Props {
  date: Date;
}

const DayCard: NextPage<Props> = (props) => {
  const { date } = props;

  var timeline = [];
  for (var i = 0; i < 24; i++) {
    var time = i + ":00";
    if (i < 10) {
      time = "0" + time;
    }
    timeline.push({ "time": time, "place": "" });
  }

  const bodyTemplate = () => {
    return (
      <TimelineDrop></TimelineDrop>
    )
  }

  return (
    <div>
      <DataTable value={timeline} showGridlines responsiveLayout="scroll">
        <Column field="time" header={date.toLocaleDateString()} style={{ padding: '5px', width: '10px' }}></Column>
        <Column field="place" style={{ padding: '5px' }} body={bodyTemplate}></Column>
      </DataTable>
    </div>
  )
};

export default DayCard;