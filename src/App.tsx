import React, { FC, useEffect, useRef } from 'react';
import Intro from './sections/Intro';
import Summary from './sections/Summary';
import Form from './sections/Form';
import Header from './components/Header';
import './styles/index.scss';

const App: FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';

    if (ref.current) {
      ref.current.style.opacity = '0';
    }
    const timeout = setTimeout(() => {
      if (ref.current) {
        ref.current.style.display = 'none';
      }
    }, 1400);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <React.Fragment>
      <Header />
      <div ref={ref} className="init-loading"></div>
      <Intro />
      <Summary />
      <Form />
      <section id="section-4"></section>;
    </React.Fragment>
  );
};

export default App;
