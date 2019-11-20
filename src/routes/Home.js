import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import payload from '../store/data/benchmark-r3-d5.json';
import { useFormRenderer as test } from '../hooks';
import { register } from '../store/actions/form';

export const Home = () => {
  const dispatch = useDispatch();

  const loadTime = useSelector(state => state.form.loadTime);

  useEffect(() => {
    const form = test(payload);
    dispatch(register(form));
  }, [dispatch]);

  return (
    <div>
      <h1>Stage 2</h1>
      <h2>Benching</h2>
      <Fragment>JSON load time:{loadTime}</Fragment>
      <a href="#/benchmark">Start</a>
    </div>
  );
};
