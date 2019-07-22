import React, { Fragment } from 'react';

import payload from './store/mocks/form.json';
import { Form, Group, Textbox, JsonView } from './components';
import { register, update } from './store/ducks/form';

function App() {
  return (
    <Fragment>
      <Form payload={payload} components={[Group, Textbox]} onRegister={register} onChange={update} />
      <JsonView />
    </Fragment>
  );
}

export default App;
