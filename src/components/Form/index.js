import React from 'react';

import { useFormRenderer } from '../../hooks';
import { Container, H1 } from './styles';

export const Form = ({ payload, components, onChange }) => {
  const form = useFormRenderer(payload, components, onChange);
  return (
    <Container>
      <H1>{payload.ScreenName}</H1>
      {form}
    </Container>
  );
};
