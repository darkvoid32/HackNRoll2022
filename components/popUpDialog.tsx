import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { NextPage } from "next";
import React, { useState } from 'react';
import { useForm, Controller, FieldErrorsImpl, FieldValue, FieldValues } from 'react-hook-form';

interface Props {
  display: boolean;
  header: string,
  content: string;
  handlePopUp: (show: boolean) => void;
}

const PopUpDialog: NextPage<Props> = (props) => {
  const { display, header, content, handlePopUp } = props;

  const [formData, setFormData] = useState({});

  const defaultValues = {
    place: '',
    description: ''
  }

  const { control, formState: { errors }, handleSubmit } = useForm({ defaultValues });

  const onSubmit = (data: { place: string; description: string; }) => {
    console.log(data);
    setFormData(data);
    hidePopUp();
  };

  const renderFooter = () => {
    return (
      <div>
        <Button label="Cancel" icon="pi pi-times" onClick={hidePopUp} className="p-button-text" />
        <Button label="Confirm" icon="pi pi-check" onClick={handleSubmit(onSubmit)} autoFocus />
      </div>
    );
  }

  //   const getFormErrorMessage = (name) => {
  //     return errors[name] && <small className="p-error">{errors[name].message}</small>
  // };

  const hidePopUp = () => {
    handlePopUp(false);
  }

  return (
    <Dialog header={header} visible={display} style={{ width: '50vw' }} footer={renderFooter} onHide={hidePopUp}>
      {(() => {
        switch (content) {
          case 'Place':
            return <div className="grid p-fluid">
              <div className="field py-3">
                <span className="p-float-label">
                  <Controller name="place" control={control} rules={{ required: 'Place is required.' }} render={({ field, fieldState }) => (
                    <InputText id={field.name} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                  )} />
                  <label htmlFor="place" className={classNames({ 'p-error': errors.place })}>Place*</label>
                </span>
                {/* {getFormErrorMessage('name')} */}
              </div>

              <div className="field py-3">
                <span className="p-float-label">
                  <Controller name="description" control={control} render={({ field }) => (
                    <InputText id={field.name} {...field} autoFocus />
                  )} />
                  <label htmlFor="description">Description</label>
                </span>
              </div>
            </div>
          default:
            return null
        }
      })()}
    </Dialog>
  )
};

export default PopUpDialog;