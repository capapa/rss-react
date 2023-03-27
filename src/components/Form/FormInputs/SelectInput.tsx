import React from 'react';
import { PropsFormItem } from '../../../types/Types';

class SelectInput extends React.Component<
  PropsFormItem<React.RefObject<HTMLSelectElement>>
> {
  render() {
    const { refControl, label, hasError, errorText } = this.props;
    return (
      <div className="form__item">
        <label htmlFor="select" className="form__item-label">
          {label}
        </label>
        <select
          className="form__item-input"
          defaultValue="default"
          ref={refControl}
        >
          <option disabled value="default" hidden>
            Производитель
          </option>
          <option value="rus">Россия</option>
          <option value="turk">Турция</option>
          <option value="chin">Китай</option>
        </select>

        <div
          className="form__item-error"
          style={{
            display: hasError ? 'block' : 'none',
          }}
        >
          {errorText}
        </div>
      </div>
    );
  }
}
export default SelectInput;
