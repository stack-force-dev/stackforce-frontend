import React, { FC, useEffect, useRef } from 'react';
import Intro from './sections/Intro';
import Form from './sections/Form';
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
    }, 800);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <React.Fragment>
      <div ref={ref} className="init-loading"></div>
      <Intro />
      <Form />
    </React.Fragment>
  );
};

export default App;
