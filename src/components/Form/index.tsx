import React from 'react';

import { useFormRenderer } from '../../hooks';
import { Container, Heading } from './styles';

import { FormProps } from '../../types';

export const Form = (props: FormProps) => {
  const form = useFormRenderer(props.payload, props.components, props.onChange);
  return (
    <Container>
      <Heading>{props.payload.ScreenName}</Heading>
      {form}
    </Container>
  );
};
