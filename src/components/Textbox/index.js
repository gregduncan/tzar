import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const Textbox = ({ payload, onRegister, onChange }) => {
//   const dispatch = useDispatch();
//   dispatch(onRegister(payload));
  const data = useSelector(state => state.form.components.find(component => component.ShortCode === payload.ShortCode));

  return <input type="text" placeholder={payload.Label} />;
};
