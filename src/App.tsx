import React, { FC } from 'react';
import Intro from './sections/Intro';
import Form from './sections/Form';
import './styles/index.scss';
import Header from './components/Header';

const App: FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Intro />
      <Form />
    </React.Fragment>
  );
};

export default App;
