import React from 'react';
import { PropsFormItem } from '../../../types/Types';

// | React.RefObject<HTMLInputElement>
//     | React.RefObject<HTMLSelectElement>
//     | React.RefObject<HTMLInputElement>[];
class RadioInput extends React.Component<
  PropsFormItem<React.RefObject<HTMLInputElement>[]>
> {
  // getRadio(element: React.RefObject<HTMLInputElement>, index: number) {
  //   return (
  //     <div className="form__item-cr">
  //       <input
  //         type="radio"
  //         id={`radio${index}`}
  //         className="form__rate"
  //         name="rate"
  //         ref={element}
  //         value={index}
  //       />
  //       <label htmlFor={`radio${index}`} className="form__label_radio">
  //         {index}
  //       </label>
  //     </div>
  //   );
  // }

  render() {
    const { refControl, label, hasError, errorText } = this.props;
    return (
      <div className="form__item">
        <p className="form__item-label">{label}</p>
        <div className="form__item__container">
          <div className="form__item-cr">
            <label htmlFor="radio1" className="form__label_radio">
              1
              <input
                type="radio"
                id="radio1"
                className="form__rate"
                name="rate"
                ref={refControl[0]}
                value="1"
              />
            </label>
            <label htmlFor="radio2" className="form__label_radio">
              2
              <input
                type="radio"
                id="radio2"
                className="form__rate"
                name="rate"
                ref={refControl[1]}
                value="2"
              />
            </label>
            <label htmlFor="radio3" className="form__label_radio">
              3
              <input
                type="radio"
                id="radio3"
                className="form__rate"
                name="rate"
                ref={refControl[2]}
                value="3"
              />
            </label>
            <label htmlFor="radio4" className="form__label_radio">
              4
              <input
                type="radio"
                id="radio4"
                className="form__rate"
                name="rate"
                ref={refControl[3]}
                value="4"
              />
            </label>
            <label htmlFor="radio5" className="form__label_radio">
              5
              <input
                type="radio"
                id="radio5"
                className="form__rate"
                name="rate"
                ref={refControl[4]}
                value="5"
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
export default RadioInput;
