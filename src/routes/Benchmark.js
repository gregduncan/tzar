import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { Form } from '../components';

export const Benchmark = () => {
  const { components, count } = useSelector(state => state.form);

  return (
    <Fragment>
      <h3>{count} components</h3>
      <Form payload={components} />
    </Fragment>
  );
};
