import React from 'react';
import { PropsFormItem } from '../../../types/Types';

class TextInput extends React.Component<
  PropsFormItem<React.RefObject<HTMLInputElement>>
> {
  render() {
    const { refControl, label, hasError } = this.props;
    return (
      <div className="form__item">
        <label className="form__item-label" htmlFor="name">
          {label}
        </label>
        <input type="text" ref={refControl} className="form__item-input" />
        <div
          className="form__item-error"
          style={{
            display: hasError ? 'none' : 'block',
            cursor: hasError ? 'default' : 'pointer',
          }}
        >
          Первая буква должна быть заглавная, поле должно содержать не меньше
          трех символов
        </div>
      </div>
    );
  }
}
export default TextInput;
