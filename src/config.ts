import d, { Locale } from "@utils/dictionary";

export const routes = (locale = Locale.En) => [
  { name: d.menu.intro[locale], dark: false },
  { name: d.menu.about[locale], dark: false },
  { name: d.menu.team[locale], dark: false },
  { name: d.menu.stack[locale], dark: false },
  { name: d.menu.lifetime[locale], dark: false },
  { name: d.menu.claim[locale], dark: true },
];

export const darkSections = routes().reduce((acc, route, index) => {
  if (!route.dark) return acc;
  return [...acc, index + 1];
}, []);
