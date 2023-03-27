import React from 'react';
import { PropsFormContol } from '../../../types/Types';

export default function Contol(props: PropsFormContol) {
  return (
    <div className="form__container">
      <label className="form__container-label" htmlFor={props.id}>
        {props.label}
      </label>
      <input
        className="form__container-input"
        id={props.id}
        type={props.type}
      />
      {props.hasError && <span>{props.errorText}</span>}
    </div>
  );
}
