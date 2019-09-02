import React, { Fragment } from 'react';

import payload from './store/data/form.json';
import { Form, JsonView } from './components';

function App() {
  return (
    <Fragment>
      <Form payload={payload} />
      <JsonView />
    </Fragment>
  );
}

export default App;
