import React from 'react';

import { useFormRenderer } from '../../hooks';
import { Container, Heading } from './styles';
import { DCRenderer } from '../';

export const Form = ({ payload, onChange }) => {
  const form = useFormRenderer(payload);
  return (
    <Container>
      <Heading>{payload.ScreenName}</Heading>
      {form.map((component, i) => (
        <DCRenderer key={i} payload={component} onChange={onChange} />
      ))}
    </Container>
  );
};
