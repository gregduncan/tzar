import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Heading } from './styles';
import { DCRenderer } from '../DCRenderer';

export const Group = ({ payload, onChange, components, register }) => {
  const data = useSelector(state => state.form.components.find(component => component.ShortCode === payload.ShortCode));

  return (
    <Container className={data.CSSClass}>
      <Heading>{payload.ShortCode}</Heading>
      {payload.children.map((component, i) => (
        <DCRenderer key={i} payload={component} onChange={onChange} components={components} register={register} />
      ))}
    </Container>
  );
};
