import React from 'react';
import { useSelector } from 'react-redux';

import { Label, Container } from './styles';

export const Radio = ({ payload, onChange }) => {
  const data = useSelector(state => state.form.components.find(component => component.ShortCode === payload.ShortCode));
  const radios = data.AllowedValues.map((item, index) => (<span key={index}><input type="radio" name="radios" value={item.Id} onClick={e => onChange(e.target.value)} /> {item.Text}</span>))
  return (
    <Container>
      <Label>{data.Label}</Label>
      {radios}
    </Container>
  );
};
