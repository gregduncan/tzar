import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const Group = ({ payload, children, onRegister, onChange }) => {
//   const dispatch = useDispatch();
//   dispatch(onRegister(payload));
  const data = useSelector(state => state.form.components.find(component => component.ShortCode === payload.ShortCode));

  return <div className={payload.CSSClass}>{children}</div>;
};
