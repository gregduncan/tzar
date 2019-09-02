import React from 'react';
import { useDispatch } from 'react-redux';

import { componentDidMount, componentDidChange } from '../../store/actions/form';
import { useFormRenderer } from '../../hooks';
import { Container, Heading } from './styles';
import { DCRenderer } from '../';

export const Form = ({ payload }) => {
  const dispatch = useDispatch();

  const form = useFormRenderer(payload);

  const register = dataComponent => {
    dispatch(componentDidMount(dataComponent));
  };

  const onChange = (shortCode, value) => {
    dispatch(componentDidChange(shortCode, value));
  };

  return (
    <Container>
      <Heading>{payload.ScreenName}</Heading>
      {form.map((component, i) => (
        <DCRenderer key={i} payload={component} onChange={onChange} register={register} />
      ))}
    </Container>
  );
};
