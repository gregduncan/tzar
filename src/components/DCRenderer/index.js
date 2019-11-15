import React from 'react';
import { Textbox, Group, Calendar, Radio } from '../';

export const DCRenderer = ({ payload, onChange, register }) => {
  let component;
  switch (payload.DisplayTypeShortCode) {
    case 'GROUP':
      component = <Group payload={payload} register={register} />;
      break;
    case 'TEXTBLOCK':
        component = <Textbox payload={payload} />;
        break;
    case 'RADIO':
        component = <Radio payload={payload} onChange={onChange} />;
        break;
    case 'CALENDAR':
      component = <Calendar payload={payload} />;
      break;
    default:
      throw new Error(`Unknown component ${payload.DisplayTypeShortCode}`);
  }
  register(payload);
  return component;
};
