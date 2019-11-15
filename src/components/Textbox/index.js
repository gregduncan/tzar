import React from 'react';
import { useSelector } from 'react-redux';

import { Input, Label, Container } from './styles';

export const Textbox = ({ payload }) => {
  const data = useSelector(state => state.form.components.find(component => component.ShortCode === payload.ShortCode));
  const updated = useSelector(state => state.form.updated);
  if(data.Visible){
    return (
      <Container>
        <Label>{data.Label}</Label>
        <Input type="text" value={data.Value} />
      </Container>
    );
  } else {
    return null;
  }
};
