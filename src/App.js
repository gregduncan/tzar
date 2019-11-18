import React, { Fragment } from 'react';

import payload from './store/data/benchmark-r3-d9.json';
import { Form } from './components';

function App() {
  return (
    <Fragment>
      <Form payload={payload} />
    </Fragment>
  );
}

export default App;
