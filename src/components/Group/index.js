import React from 'react';
import { useSelector } from 'react-redux';

import { Container, H2 } from './styles';

export const Group = ({ payload, children }) => {
  const data = useSelector(state => state.form.components.find(component => component.ShortCode === payload.ShortCode));

  return (
    <Container className={data.CSSClass}>
      <H2>{payload.Label}</H2>
      {children}
    </Container>
  );
};
