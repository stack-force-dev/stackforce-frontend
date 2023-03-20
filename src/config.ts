import d, { Locale } from "@utils/dictionary";

export const routes = (locale = Locale.En) => [
  { name: d.menu.main[locale], dark: false },
  { name: d.menu.about[locale], dark: false },
  { name: d.menu.technology[locale], dark: true },
  { name: d.menu.team[locale], dark: false },
  { name: d.menu.contacts[locale], dark: false },
];

export const darkSections = routes().reduce((acc, route, index) => {
  if (!route.dark) return acc;
  return [...acc, index + 1];
}, []);
