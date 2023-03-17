import React, { FC, useEffect, useRef, useState } from 'react';
import Intro from './sections/Intro';
import Summary from './sections/Summary';
import Form from './sections/Form';
import Header from './components/Header';
import { Locale, LocaleContext } from './utils/Locates/locates';
import './styles/index.scss';

const App: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [locale, setLocale] = useState(Locale.Ru);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    const storageLocale = localStorage.getItem('locale') as Locale;
    if (Object.values(Locale).includes(storageLocale)) setLocale(storageLocale);
    let timeout;
    if (ref.current) {
      ref.current.style.opacity = '0';
    }
    window.onload = () => {
      if (ref.current) ref.current.style.display = 'none';
      timeout = setTimeout(() => {
        if (ref.current) ref.current.style.display = 'none';
      }, 800);
    };

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <LocaleContext.Provider value={locale}>
      <Header />
      <div ref={ref} className="init-loading"></div>
      <Intro />
      <Summary />
      <Form />
      <section id="section-4"></section>
    </LocaleContext.Provider>
  );
};

export default App;
