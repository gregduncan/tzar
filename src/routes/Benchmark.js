import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { Form } from '../components';

export const Benchmark = () => {
  const { components } = useSelector(state => state.form);

  return (
    <Fragment>
      <Form payload={components} />
    </Fragment>
  );
};
