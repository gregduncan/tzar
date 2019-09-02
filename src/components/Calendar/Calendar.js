import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Pikaday from 'pikaday';

import { Container, Label, Input } from './styles';

export default ({ payload, onChange }) => {
  const data = useSelector(state => state.form.components.find(component => component.ShortCode === payload.ShortCode));
  const ref = useRef(null);

  useEffect(() => {
    new Pikaday({ field: ref.current, format: 'DD/MM/YYYY' });
    return () => {
      // Clean up.
    };
  });

  return (
    <Container className={data.CSSClass}>
      <Label>{payload.Label}</Label>
      <Input type="text" ref={ref} value={data.Value} onSelect={e => onChange(data.ShortCode, e.target.value)} />
    </Container>
  );
};
