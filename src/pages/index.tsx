import { NextPage } from "next"

import { DataTable, DataTableRowClickEventParams, DataTableRowEditCompleteParams } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';
import { Column, ColumnEditorOptions, ColumnBodyOptions, ColumnEventParams } from 'primereact/column';

import SampleData from "./api/plans.json";
import DatePicker from "components/datePicker";
import { useState } from 'react';
import { Button } from "primereact/button";
import { CalendarChangeParams } from "primereact/calendar";

const Home: NextPage = () => {
  const [plans, updatePlans] = useState(SampleData.Plans);

  const dateEditor = (options: any) => {
    return <DatePicker value={new Date(options.value)} onChange={(e: CalendarChangeParams) => {
      let date = e.value as Date;
      options.editorCallback(date.toLocaleDateString());
    }}></DatePicker>
  }

  const cellEditor = (options: any) => {
    return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
  }

  const onRowEditComplete = (e: DataTableRowEditCompleteParams) => {
    let _plans = [...plans];
    let { newData, index } = e;
    _plans[index] = newData;

    updatePlans(_plans);
  }

  const viewPlan = (columnProp: ColumnBodyOptions) => {
    window.location.href = "/plans/" + columnProp.rowIndex;
  }

  // const buttonTemplate = (rowData: ColumnBodyOptions) => (
  //   <Button className="p-button-rounded p-button-outlined" onClick={(_) => viewPlan(props)}>View</Button>
  // )

  const buttonTemplate = (rowData: ColumnBodyOptions) => {
    return <Button className="p-button-rounded p-button-outlined" onClick={() => viewPlan(rowData)}>View</Button>;
  }

  return (
    <main>
      <div>
        <DataTable value={plans} editMode="row" dataKey="id" onRowEditComplete={onRowEditComplete} responsiveLayout="scroll" autoLayout>
          <Column field="title" header="Title" editor={(options) => cellEditor(options)}></Column>
          <Column field="startDate" header="Start Date" editor={(options) => dateEditor(options)} ></Column>
          <Column field="endDate" header="End Date" editor={(options) => dateEditor(options)}></Column>
          <Column rowEditor bodyStyle={{ textAlign: 'right' }}></Column>
          <Column body={buttonTemplate} style={{ flex: '0 0 4rem' }}>
          </Column>
        </DataTable>
      </div>
    </main >
  )
}

export default Home;