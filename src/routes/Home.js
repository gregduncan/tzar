import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import payload from '../store/data/benchmark-r3-d9.json';
import { useFormRenderer as formRenderer } from '../hooks';
import { register } from '../store/actions/form';

export const Home = () => {
  const dispatch = useDispatch();

  const loadTime = useSelector(state => state.form.loadTime);

  useEffect(() => {
    const form = formRenderer(payload);
    dispatch(register(form));
  }, [dispatch]);

  return (
    <div>
      <h1>Stage 2</h1>
      <h2>Bench marking</h2>
      {loadTime && (
        <div>
          <div>JSON load time:{loadTime}</div>
          <a href="#/benchmark">Start</a>
        </div>
      )}
      {!loadTime && <div>loading...</div>}
    </div>
  );
};
