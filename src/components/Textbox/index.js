import React from 'react';
import { useSelector } from 'react-redux';

export const Textbox = ({ payload }) => {
  const ruleValue = useSelector(state => state.form.ruleValue);
  if ((payload.Rules[0].Value === ruleValue)) {
    return (
      <div>
        <span>{payload.Label}</span>
        <input type="text" value={payload.Value} />
      </div>
    );
  } else {
    return null;
  }
};
