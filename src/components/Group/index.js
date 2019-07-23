import React from 'react';
import { useSelector } from 'react-redux';

export const Group = ({ payload, children, onChange }) => {
  const data = useSelector(state => state.form.components.find(component => component.ShortCode === payload.ShortCode));

  return <div className={data.CSSClass}>{children}</div>;
};
