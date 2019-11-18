import React from 'react';

import { DCRenderer } from '../DCRenderer';

export const Group = ({ payload, onChange, components, register }) => {
  return (
    <div className={payload.CSSClass}>
      {payload.children.map((component, i) => (
        <DCRenderer key={i} payload={component} onChange={onChange} components={components} register={register} />
      ))}
    </div>
  );
};
