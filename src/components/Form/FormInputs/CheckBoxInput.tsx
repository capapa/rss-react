import React from 'react';
import { PropsFormItem } from '../../../types/Types';

class CheckBoxInput extends React.Component<
  PropsFormItem<React.RefObject<HTMLInputElement>[]>
> {
  render() {
    const { refControl, label, hasError, errorText } = this.props;
    return (
      <div className="form__item">
        <p className="form__item-label">{label}</p>
        <div className="form__item__container">
          <div className="form__item-cr">
            <label htmlFor="checkbox1">
              Доставка сегодня
              <input
                type="checkbox"
                name="checkbox"
                className="form__item-cr"
                ref={refControl[0]}
                value="сегодня"
                id="checkbox1"
              />
            </label>
            <label htmlFor="checkbox2">
              Доставка завтра
              <input
                type="checkbox"
                name="checkbox"
                className="form__item-cr"
                ref={refControl[1]}
                value="завтра"
                id="checkbox2"
              />
            </label>
          </div>
        </div>
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
export default CheckBoxInput;
