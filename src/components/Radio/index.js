import React from 'react';

export const Radio = ({ payload, onChange }) => {
  const radios = payload.AllowedValues.map((item, index) => (
    <span key={index}>
      <input type="radio" name="radios" value={item.Id} onClick={e => onChange(e.target.value)} /> {item.Text}
    </span>
  ));
  return (
    <div>
      <h4>{payload.Label}</h4>
      {radios}
    </div>
  );
};
