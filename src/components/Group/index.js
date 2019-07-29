import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Heading } from './styles';

export const Group = ({ payload, children }) => {
  const data = useSelector(state => state.form.components.find(component => component.ShortCode === payload.ShortCode));

  return (
    <Container className={data.CSSClass}>
      <Heading>{payload.Label}</Heading>
      {children}
    </Container>
  );
};
