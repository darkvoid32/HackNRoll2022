import { NextPage } from "next"

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import SampleData from "./api/plans.json";

const Home: NextPage = () => {
  const plans = SampleData.Plans;

  return (
    <main>
      <div>
        <DataTable selectionMode="single" value={plans} scrollable scrollHeight="400px"
          onRowClick={(event) => {
            window.location.href = "/plans/" + event.data.id;
          }}
        >
          <Column field="title" header="Title"></Column>
          <Column field="startDate" header="Start Date"></Column>
          <Column field="endDate" header="End Date"></Column>
        </DataTable>
      </div>
    </main >
  )
}

export default Home;