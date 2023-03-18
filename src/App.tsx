import React, { FC, useEffect, useRef } from 'react';
import Intro from './sections/Intro';
import Summary from './sections/Summary';
import Form from './sections/Form';
import Header from './components/Header';
import { Dictionary } from './utils/dictionary';
import './styles/index.scss';

const App: FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';

    let timeout;
    if (ref.current) {
      ref.current.style.opacity = '0';
    }
    window.onload = () => {
      timeout = setTimeout(() => {
        if (ref.current) ref.current.style.display = 'none';
      }, 800);
    };

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Dictionary locales={['ru', 'en']}>
      <Header />
      <div ref={ref} className="init-loading"></div>
      <Intro />
      <Summary />
      <Form />
      <section id="section-4"></section>
    </Dictionary>
  );
};

export default App;
