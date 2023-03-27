import React from 'react';
import { PropsFormItem } from '../../../types/Types';

class DateInput extends React.Component<
  PropsFormItem<React.RefObject<HTMLDataElement>>
> {
  render() {
    const { refControl, label, hasError, errorText } = this.props;
    return (
      <div className="form__item">
        <label htmlFor="date" className="form__item-label">
          {label}
        </label>
        <input type="date" className="form__item-input" ref={refControl} />

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
export default DateInput;
