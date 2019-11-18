import React from 'react';
import { useDispatch } from 'react-redux';

import { componentDidMount, componentDidChange } from '../../store/actions/form';
import { useFormRenderer } from '../../hooks';
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
    <div>
      <h1>{payload.ScreenName}</h1>
      {form.map((component, i) => (
        <DCRenderer key={i} payload={component} onChange={onChange} register={register} />
      ))}
    </div>
  );
};
