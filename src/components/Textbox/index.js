import React from 'react';
import { useSelector } from 'react-redux';

import { Input, Label, Container } from './styles';

export const Textbox = ({ payload, onChange }) => {
  const data = useSelector(state => state.form.components.find(component => component.ShortCode === payload.ShortCode));

  return (
    <Container>
      <Label>{data.Label}</Label>
      <Input type="text" value={data.Value} onChange={e => onChange(data.ShortCode, e.target.value)} />
    </Container>
  );
};
