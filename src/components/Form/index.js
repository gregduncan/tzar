import React from 'react';
import { useDispatch } from 'react-redux';

import { componentDidChange } from '../../store/actions/form';

import { DCRenderer } from '../';

export const Form = ({ payload }) => {
  const dispatch = useDispatch();

  const onChange = (shortCode, value) => {
    dispatch(componentDidChange(shortCode, value));
  };

  return (
    <div>
      {payload.map((component, i) => (
        <DCRenderer key={i} payload={component} onChange={onChange} />
      ))}
    </div>
  );
};
