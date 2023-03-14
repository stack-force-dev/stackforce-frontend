import React, { FC } from 'react';
import Intro from './sections/Intro';
import './index.scss';

const App: FC = () => {
  return (
    <React.Fragment>
      {/* <header className="header">header</header> */}
      <section className="intro">
        <Intro />
      </section>
      <section className="info">
        <div>test</div>
      </section>
    </React.Fragment>
  );
};

export default App;
