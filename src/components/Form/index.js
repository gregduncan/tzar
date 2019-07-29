import React from 'react';

import { useFormRenderer } from '../../hooks';
import { Container, Heading } from './styles';

export const Form = ({ payload, components, onChange }) => {
  const form = useFormRenderer(payload, components, onChange);
  return (
    <Container>
      <Heading>{payload.ScreenName}</Heading>
      {form}
    </Container>
  );
};
