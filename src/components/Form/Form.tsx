import React, { createRef, FormEvent } from 'react';
import TextInput from './FormInputs/TextInput';
import SelectInput from './FormInputs/SelectInput';
import CheckBoxInput from './FormInputs/CheckBoxInput';
import RadioInput from './FormInputs/RadioInput';
import FileInput from './FormInputs/FileInput';
import { InfoValidation, StateForm } from '../../types/Types';
import './Form.scss';

class Form extends React.Component {
  inputDescription = createRef<HTMLInputElement>();

  inputTitle = createRef<HTMLInputElement>();

  inputPrice = createRef<HTMLInputElement>();

  inputCountry = createRef<HTMLSelectElement>();

  inputPhoto = createRef<HTMLInputElement>();

  inputDelivery = Array(2).map(() => createRef<HTMLInputElement>());

  inputRateBox = Array(3).map(() => createRef<HTMLInputElement>());

  inputArrival = createRef<HTMLInputElement>();

  constructor(props: PropsForm) {
    super(props);
    this.state = {
      validate: false,
      errors: {
        title: true,
        img: true,
        rate: true,
        price: true,
        description: true,
        delivery: true,
        country: true,
      },
    };
  }

  getValueControls = () => {
    const rateArray = this.inputRateBox.filter((item) => item.current?.checked);
    const rate = rateArray.length ? Number(rateArray[0].current?.value) : 0;
    const img = this.inputPhoto?.current?.files
      ? this.inputPhoto.current.files[0]
      : '';
    const delivery = this.inputDelivery
      .filter((item) => item.current?.checked)
      .map((item) => item.current?.value)
      .join(', ');

    const info: InfoValidation = {
      title: this.inputTitle.current?.value,
      description: this.inputDescription.current?.value,
      arrival: new Date(this.inputArrival.current?.value || 0),
      country: this.inputCountry.current?.value,
      price: Number(this.inputPrice.current?.value),
      rate,
      delivery,
      img,
    };
    return info;
  };

  checkValidation = (info: InfoValidation) => {
    
    return true;
  };



  render() {
    const { errors } = this.state;
    return (
      <form
        noValidate
        name="form"
        action="#"
        className="form-page__form form"
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
          const valuesControl = this.getValueControls();
          if (this.checkValidation(valuesControl)) {
            //setProps(valuesControl)
            (e.target as HTMLFormElement).reset();
          }
        }}
      >
        <TextInput
          refControl={this.inputDescription}
          label="Description"
          hasError={errors.description}
        />
        <TextInput
          refControl={this.inputTitle}
          label="Title"
          hasError={errors.title}
        />
        <TextInput
          refControl={this.inputPrice}
          label="Price"
          hasError={errors.price}
        />
        <SelectInput
          refControl={this.inputCountry}
          label="Country"
          hasError={errors.country}
        />
        <CheckBoxInput
          refControl={this.inputDelivery}
          label="Delivery"
          hasError={errors.delivery}
        />
        <RadioInput
          refControl={this.inputRateBox}
          label="Rate"
          hasError={errors.rate}
        />
        <TextInput
          refControl={this.inputArrival}
          label="Arrival"
          hasError={errors.arrival}
        />
        <FileInput
          refControl={this.inputPhoto}
          label="Photo"
          hasError={errors.img}
        />

        <input type="submit" className="form__submit" value="Save" />
      </form>
    );
  }
}

export default Form;
