import React from 'react';
import { Textbox, Group, Radio } from '../';

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
    default:
      throw new Error(`Unknown component ${payload.DisplayTypeShortCode}`);
  }
  register(payload);
  return component;
};
