import React from 'react';
import { PropsFormItem } from '../../../types/Types';

class CheckBoxInput extends React.Component<
  PropsFormItem<React.RefObject<HTMLInputElement>>
> {
  render() {
    const { refControl, label, hasError } = this.props;
    return (
      <div className="form__item">
        <p className="form__item-label">{label}</p>
        <div className="form__item__container">
          <div className="form__item-cr">
            <label htmlFor="checkbox1">
              Доставка
              <input
                type="checkbox"
                name="checkbox"
                className="form__item-cr"
                ref={refControl}
                value="Сегодня"
                id="checkbox1"
              />
            </label>
            <label htmlFor="checkbox2">
              Доставка завтра
              <input
                type="checkbox"
                name="checkbox"
                className="form__item-cr"
                ref={refControl}
                value="Завтра"
                id="checkbox2"
              />
            </label>
          </div>
        </div>
        <div
          className="form__item-error"
          style={{
            display: hasError ? 'none' : 'block',
            cursor: hasError ? 'default' : 'pointer',
          }}
        >
          Необходимо выбрать доставку
        </div>
      </div>
    );
  }
}
export default CheckBoxInput;
