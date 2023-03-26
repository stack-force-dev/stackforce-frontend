import d, { Locale } from "@utils/dictionary";

export const routes = (locale = Locale.En) => [
  { name: d.menu.intro[locale] },
  { name: d.menu.about[locale] },
  { name: d.menu.team[locale] },
  { name: d.menu.stack[locale] },
  { name: d.menu.lifetime[locale] },
  { name: d.menu.claim[locale] },
];
