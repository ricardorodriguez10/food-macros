import React from 'react';
import '../../global.css';

const Input = ({
  labelText,
  name,
  placeholder,
  type,
  value,
  half,
  onChange,
}) => (
  <label className={half ? 'half' : 'label'}>
    {labelText}
    <input
      className="input"
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </label>
);

export default Input;
