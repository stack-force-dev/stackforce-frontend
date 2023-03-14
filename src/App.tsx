import React, { FC } from 'react';
import Intro from './sections/Intro';
import Form from './sections/Form';
import './index.scss';

const App: FC = () => {
  return (
    <React.Fragment>
      {/* <header className="header">header</header> */}
      <Intro />
      <Form />
    </React.Fragment>
  );
};

export default App;
