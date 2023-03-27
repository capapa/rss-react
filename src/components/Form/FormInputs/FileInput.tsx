import React from 'react';
import { PropsFormItem } from '../../../types/Types';

class FileInput extends React.Component<
  PropsFormItem<React.RefObject<HTMLInputElement>>
> {
  render() {
    const { refControl, hasError, errorText } = this.props;
    return (
      <div className="form__item">
        <label htmlFor="file" className="form__item-label">
          Photo
          <input
            type="file"
            className="form__item-file"
            accept="image/*"
            ref={refControl}
          />
        </label>
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
export default FileInput;
