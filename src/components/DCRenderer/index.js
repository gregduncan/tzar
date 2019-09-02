import React from 'react';
import { Textbox, Group, Calendar } from '../';

export const DCRenderer = ({ payload, onChange, register }) => {
  let component;
  switch (payload.DisplayTypeShortCode) {
    case 'GROUP':
      component = <Group payload={payload} onChange={onChange} register={register} />;
      break;
    case 'TEXTBOX':
      component = <Textbox payload={payload} onChange={onChange} />;
      break;
    case 'CALENDAR':
      component = <Calendar payload={payload} onChange={onChange} />;
      break;
    default:
      throw new Error(`Unknown component ${payload.DisplayTypeShortCode}`);
  }
  register(payload);
  return component;
};
