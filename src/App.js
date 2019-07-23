import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';

import payload from './store/mocks/form.json';
import { Form, Group, Textbox, JsonView } from './components';
import { register, onChange } from './store/ducks/form';

function App() {
  const dispatch = useDispatch();
  dispatch(register(payload.DataComponents));

  return (
    <Fragment>
      <Form payload={payload} components={[Group, Textbox]} onChange={onChange} />
      <JsonView />
    </Fragment>
  );
}

export default App;
