import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';

import payload from './store/data/form.json';
import { Form, Group, Textbox, JsonView } from './components';
import { Calendar } from './components/Calendar';
import { register, onChange } from './store/actions/form';

function App() {
  const dispatch = useDispatch();
  dispatch(register(payload.DataComponents));

  return (
    <Fragment>
      <Form payload={payload} components={[Group, Textbox, Calendar]} onChange={onChange} />
      <JsonView />
    </Fragment>
  );
}

export default App;
