import React from 'react';
import ReactJson from 'react-json-view';
import { useSelector } from 'react-redux';

export const JsonView = () => {
  const data = useSelector(state => state.form.components);
  return <ReactJson src={data} />;
};
