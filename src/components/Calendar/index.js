import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./Calendar'),
  loading() {
    return <div>Loading...</div>;
  }
});

export const Calendar = ({ payload, onChange, register }) => <LoadableComponent payload={payload} onChange={onChange} />;
