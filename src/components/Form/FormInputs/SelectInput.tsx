import React from 'react';
import { PropsFormItem } from '../../../types/Types';

class SelectInput extends React.Component<
  PropsFormItem<React.RefObject<HTMLSelectElement>>
> {
  render() {
    const { refControl, label, hasError } = this.props;
    return (
      <div className="form__item">
        <label htmlFor="select" className="form__item-label">
          {label}
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
        </label>
        <div
          className="form__item-error"
          style={{
            display: hasError ? 'none' : 'block',
            cursor: hasError ? 'default' : 'pointer',
          }}
        >
          Выберете значение
        </div>
      </div>
    );
  }
}
export default SelectInput;
