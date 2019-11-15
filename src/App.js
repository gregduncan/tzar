import React, { Fragment } from 'react';

import payload from './store/data/benchmark-r3-d0.json';
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
