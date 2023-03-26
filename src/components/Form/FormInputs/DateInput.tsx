import React from 'react';
import { PropsFormItem } from '../../../types/Types';

class DateInput extends React.Component<
  PropsFormItem<React.RefObject<HTMLInputElement>>
> {
  render() {
    const { refControl, label, hasError } = this.props;
    return (
      <div className="form__item">
        <label htmlFor="date" className="form__item-label">
          {label}

          <input type="date" className="form__item-input" ref={refControl} />
        </label>
        <div
          className="form__item-error"
          style={{
            display: hasError ? 'none' : 'block',
            cursor: hasError ? 'default' : 'pointer',
          }}
        >
          Введите дату
        </div>
      </div>
    );
  }
}
export default DateInput;
