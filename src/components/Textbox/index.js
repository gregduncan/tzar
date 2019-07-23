import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const Textbox = ({ payload, onChange }) => {
  const data = useSelector(state => state.form.components.find(component => component.ShortCode === payload.ShortCode));
  const dispatch = useDispatch();
  return <input type="text" placeholder={data.Label} value={data.Value} onChange={e => dispatch(onChange(data.ShortCode, e.target.value))} />;
};
