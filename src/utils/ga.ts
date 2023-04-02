import ReactGA from "react-ga4";

import { Env } from "@interfaces/config";

const screens = ["Intro", "About", "Team", "Stack", "Lifetime", "Claim"];

export const init = () => {
  if (process.env.NODE_ENV !== Env.Production) return;

  ReactGA.initialize("G-YC0BLSSFHV");
};

export const sendScreen = (screenNumber: number) => {
  if (process.env.NODE_ENV !== Env.Production) return;

  const screen = screens[screenNumber - 1];
  ReactGA.send({ hitType: "pageview", page: `/${screen.toLocaleLowerCase()}`, title: screen });
};
