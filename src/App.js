import React from 'react';

import payload from './data/form.json';
import { Form, Group, Textbox } from './components';

function App() {
  return <Form payload={payload} components={[Group, Textbox]} />;
}

export default App;
