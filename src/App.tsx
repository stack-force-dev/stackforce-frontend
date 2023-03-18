import React, { FC, useEffect } from 'react';
import Intro from './sections/Intro';
import Summary from './sections/Summary';
import Form from './sections/Form';
import Header from './components/Header';
import Loader from './components/Loader';
import { Dictionary } from './utils/dictionary';

const App: FC = () => {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <Dictionary locales={['ru', 'en']}>
      <Header />
      <Loader />
      <Intro />
      <Summary />
      <Form />
      <section id="section-4"></section>
    </Dictionary>
  );
};

export default App;
