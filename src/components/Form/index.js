import React, { Fragment } from 'react';

import { useFormRenderer } from '../../hooks';

export const Form = ({ payload, components, onChange }) => {
  const form = useFormRenderer(payload, components, onChange);
  return <Fragment>{form}</Fragment>;
};
