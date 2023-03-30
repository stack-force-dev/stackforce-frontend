export enum Locale {
  En = "en",
  Ru = "ru",
}

enum LocaleTitle {
  English = "English",
  Russian = "Русский",
}

export default {
  header: {
    title: {
      [Locale.En]: "StackForce",
      [Locale.Ru]: "StackForce",
    },
    subTitle: {
      [Locale.En]: "Outsource-team",
      [Locale.Ru]: "Веб-студия",
    },
    sendForm: {
      [Locale.En]: "Send form",
      [Locale.Ru]: "Оставить заявку",
    },
    menu: {
      [Locale.En]: "Menu",
      [Locale.Ru]: "Меню",
    },
  },
  intro: {
    title: {
      [Locale.En]: "Stack",
      [Locale.Ru]: "Stack",
    },
    subTitle: {
      [Locale.En]: "Force",
      [Locale.Ru]: "Force",
    },
    webTitle: {
      [Locale.En]: "Outsource-team",
      [Locale.Ru]: "Веб-студия",
    },
  },
  menu: {
    close: {
      [Locale.En]: "Close",
      [Locale.Ru]: "Закрыть",
    },
    intro: {
      [Locale.En]: "Intro",
      [Locale.Ru]: "Начало",
    },
    about: {
      [Locale.En]: "About",
      [Locale.Ru]: "О Нас",
    },
    team: {
      [Locale.En]: "Team",
      [Locale.Ru]: "Команда",
    },
    stack: {
      [Locale.En]: "Stack",
      [Locale.Ru]: "Технологии",
    },
    lifetime: {
      [Locale.En]: "Lifetime",
      [Locale.Ru]: "Как мы работаем",
    },
    claim: {
      [Locale.En]: "Claim",
      [Locale.Ru]: "Оставить заявку",
    },
  },
};

export const getLocaleTitle = (locale: Locale): LocaleTitle => {
  switch (locale) {
    case Locale.Ru:
      return LocaleTitle.Russian;
    default:
      return LocaleTitle.English;
  }
};

export { useDictionary, default as Dictionary } from "@gazzati/react-dictionary";
