import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Input, Label, Container } from './styles';

export const Textbox = ({ payload, onChange }) => {
  const data = useSelector(state => state.form.components.find(component => component.ShortCode === payload.ShortCode));
  const dispatch = useDispatch();
  return (
    <Container>
      <Label>{data.Label}</Label>
      <Input type="text" value={data.Value} onChange={e => dispatch(onChange(data.ShortCode, e.target.value))} />
    </Container>
  );
};
