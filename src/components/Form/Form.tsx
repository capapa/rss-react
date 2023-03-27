import React, { createRef, FormEvent } from 'react';
import TextInput from './FormInputs/TextInput';
import SelectInput from './FormInputs/SelectInput';
import CheckBoxInput from './FormInputs/CheckBoxInput';
import RadioInput from './FormInputs/RadioInput';
import FileInput from './FormInputs/FileInput';
import { InfoValidation, Props, State } from '../../types/Types';
import './Form.scss';
import DateInput from './FormInputs/DateInput';
import NumberInput from './FormInputs/NumberInput';

class Form extends React.Component<Props, State> {
  inputDescription = createRef<HTMLInputElement>();

  inputTitle = createRef<HTMLInputElement>();

  inputPrice = createRef<HTMLInputElement>();

  inputCountry = createRef<HTMLSelectElement>();

  inputPhoto = createRef<HTMLInputElement>();

  inputDelivery = Array(2)
    .fill('')
    .map(() => createRef<HTMLInputElement>());

  inputRateBox = Array(5)
    .fill('')
    .map(() => createRef<HTMLInputElement>());

  inputArrival = createRef<HTMLDataElement>();

  constructor(props: Props) {
    super(props);
    this.state = {
      errors: {
        title: '',
        img: '',
        rate: '',
        price: '',
        description: '',
        delivery: '',
        country: '',
        arrival: '',
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
      id: this.props.id,
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
    let checked = true;
    const errors: State = {
      title: '',
      img: '',
      rate: '',
      price: '',
      description: '',
      delivery: '',
      country: '',
      arrival: '',
    };
    if (!info.title || info.title.length < 3) {
      errors.title = 'Поле должно содержать не менее трех символов';
      checked = false;
    }
    if (!info.description || info.description.length < 3) {
      errors.description = 'Поле должно содержать не менее трех символов';
      checked = false;
    }
    if (!info.delivery) {
      errors.delivery = 'Необходимо выбрать срок доставки';
      checked = false;
    }
    if (!info.country || info.country === 'default') {
      errors.country = 'Необходимо выбрать страну производства';
      checked = false;
    }
    if (info.price <= 0) {
      errors.price = 'Значение должно быть больше нуля';
      checked = false;
    }
    if (info.arrival - new Date(0) === 0) {
      errors.arrival = 'Необходимо выбрать дату поставки';
      checked = false;
    }
    if (!info.rate) {
      errors.rate = 'Необходимо выбрать рейтинг';
      checked = false;
    }
    if (!info.img) {
      errors.img = 'Необходимо выбрать фото';
      checked = false;
    }

    this.setState({ errors });
    return checked;
  };

  render() {
    const { errors } = this.state;

    return (
      <form
        noValidate
        name="form"
        action="#"
        className="form"
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
          const valuesControl = this.getValueControls();
          if (this.checkValidation(valuesControl)) {
            const { addCard } = this.props;
            // console.log(valuesControl);
            addCard(valuesControl);
            (e.target as HTMLFormElement).reset();
          }
        }}
      >
        <TextInput
          refControl={this.inputDescription}
          label="Description"
          hasError={!!errors.description}
          errorText={errors.description}
        />
        <TextInput
          refControl={this.inputTitle}
          label="Title"
          hasError={!!errors.title}
          errorText={errors.title}
        />
        <NumberInput
          refControl={this.inputPrice}
          label="Price"
          hasError={!!errors.price}
          errorText={errors.price}
        />
        <SelectInput
          refControl={this.inputCountry}
          label="Country"
          hasError={!!errors.country}
          errorText={errors.country}
        />
        <CheckBoxInput
          refControl={this.inputDelivery}
          label="Delivery"
          hasError={!!errors.delivery}
          errorText={errors.delivery}
        />
        <RadioInput
          refControl={this.inputRateBox}
          label="Rate"
          hasError={!!errors.rate}
          errorText={errors.rate}
        />
        <DateInput
          refControl={this.inputArrival}
          label="Arrival"
          hasError={!!errors.arrival}
          errorText={errors.arrival}
        />
        <FileInput
          refControl={this.inputPhoto}
          label="Photo"
          hasError={!!errors.img}
          errorText={errors.img}
        />

        <input type="submit" className="form__submit" value="Save" />
      </form>
    );
  }
}

export default Form;
