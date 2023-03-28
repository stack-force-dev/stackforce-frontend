import React, { FC, useEffect } from "react";

import Header from "@components/Header";
import About from "@root/sections/About";
import Claim from "@root/sections/Claim";
import Intro from "@sections/Intro";
import LifeTime from "@sections/LifeTime";
import Stack from "@sections/Stack";
import Team from "@sections/Team";
import { Dictionary } from "@utils/dictionary";

const App: FC = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <Dictionary locales={["ru", "en"]}>
      <Header />
      {/* <Intro />
      <About />
      <Team /> */}
      <Stack />
      <LifeTime />
      <Claim />
    </Dictionary>
  );
};

export default App;
