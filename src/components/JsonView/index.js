import React from 'react';
import ReactJson from 'react-json-view';
import { useSelector } from 'react-redux';

import { Container } from './styles';

export const JsonView = () => {
  const data = useSelector(state => state.form.components.filter(component => component.IsDirty));
  return <Container>{data.length > 0 && <ReactJson src={data} />}</Container>;
};
