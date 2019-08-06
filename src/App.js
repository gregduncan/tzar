import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';

import payload from './store/data/form.json';
import { Form, JsonView } from './components';
import { register, onChange } from './store/actions/form';

function App() {
  const dispatch = useDispatch();
  dispatch(register(payload.DataComponents));

  return (
    <Fragment>
      <Form payload={payload} onChange={onChange} />
      <JsonView />
    </Fragment>
  );
}

export default App;
