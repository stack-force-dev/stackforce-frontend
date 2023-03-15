import React, { FC, useEffect, useRef, useState } from 'react';

import Intro from './sections/Intro';
import Summary from './sections/Summary';
import Form from './sections/Form';
import Header from './components/Header';
import { initPageable } from './utils/pageable';

import './styles/index.scss';
import getPageSize from './utils/getPageSize';

const App: FC = () => {
  const [headerDark, setHeaderDark] = useState(false);
  const loadingRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    initPageable(setHeaderDark);

    if (loadingRef.current) {
      loadingRef.current.style.opacity = '0';
    }

    const timeout = setTimeout(() => {
      if (loadingRef.current) loadingRef.current.style.display = 'none';
    }, 1400);
    const pageSite = getPageSize();
    document.querySelector('body')?.style.setProperty('--page--height', `${pageSite}px`);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <React.Fragment>
      <Header headerRef={headerRef} dark={headerDark} />
      <div id="container">
        <div ref={loadingRef} className="init-loading"></div>
        <Intro />
        <Summary />
        <Form />
      </div>
    </React.Fragment>
  );
};

export default App;
