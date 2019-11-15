import React from 'react';
import ReactJson from 'react-json-view';
import { useSelector } from 'react-redux';

import { Container } from './styles';

export const JsonView = () => {
  const data = useSelector(state => state.form.components);
  return (
    <ReactJson src={data} />
  )
}
