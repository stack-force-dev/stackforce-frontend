import React, { FC, useEffect } from "react";

import Header from "@components/Header";
import Intro from "@sections/Intro";
import Request from "@sections/Request";
import Summary from "@sections/Summary";
import { Dictionary } from "@utils/dictionary";

const App: FC = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <Dictionary locales={["ru", "en"]}>
      <Header />
      <Intro />
      <Summary />
      <Request />
      <section id="section-4"></section>
    </Dictionary>
  );
};

export default App;
