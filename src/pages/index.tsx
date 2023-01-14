import { NextPage } from "next"

import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';
import { Button } from "primereact/button";
import { Column, ColumnEditorOptions, ColumnBodyOptions, ColumnEventParams } from 'primereact/column';

import SampleData from "./api/plans.json";
import DatePicker from "components/datePicker";
import { useState } from 'react';

const Home: NextPage = () => {
  const plans = SampleData.Plans;

  const [date, setDate] = useState<Date>();

  const dateEditor = (options: ColumnEditorOptions) => {
    return <DatePicker value={date} onChange={(e) => options.editorCallback ? (e.target.value) : null}></DatePicker>
  }

  const editPlan = (columnProp: ColumnBodyOptions) => {
    window.location.href = "/plans/" + columnProp.rowIndex;
  }

  const cellEditor = (options: ColumnEditorOptions) => {
    return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback ? (e.target.value) : null} />;
  }

  const onCellEditComplete = (e: ColumnEventParams) => {
    let { rowData, newValue, field } = e;
    rowData[field] = newValue;
  }

  return (
    <main>
      <div>
        <DataTable value={plans} editMode="cell"  className="editable-cells-table" scrollable scrollHeight="400px">
          <Column field="title" header="Title" editor={(options) => cellEditor(options)} style={{ width: '20%' }} onCellEditComplete={onCellEditComplete}></Column>
          <Column field="startDate" header="Start Date" editor={(options) => dateEditor(options)} style={{ width: '20%' }} onCellEditComplete={onCellEditComplete}></Column>
          <Column field="endDate" header="End Date" editor={(options) => dateEditor(options)} style={{ width: '20%' }} ></Column>
          <Column field="editPlan" header="View" body={(_, props) =>
              <Button icon="pi pi-arrow-right" className="p-button-rounded p-button-text" onClick={(_) => editPlan(props)} />}>
          </Column>
        </DataTable>
      </div>
    </main >
  )
}

export default Home;