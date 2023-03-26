import { StepType } from "../../interfaces/claim";

export const stepsCards: Array<StepType> = [
  {
    name: "Выберите тип вашего проекта",
    navbarTitle: "TEST 1",
    key: "type",
    cards: [
      { title: "Электронная коммерция", description: "Электронная коммерция", value: 1 },
      { title: "Обслуживание клиентов", description: "Электронная коммерция", value: 2 },
      { title: "Интранет-портал", description: "Электронная коммерция", value: 3 },
      { title: "Другой", description: "Электронная коммерция", value: 4 },
    ],
  },
  {
    name: "Выберите тип вашего проекта",
    navbarTitle: "TEST 2",
    key: "is_adaptive",
    cards: [
      { title: "Только десктопная версия", description: "Электронная коммерция", value: 1 },
      { title: "Сайт с мобильной и планшетной версиями", description: "Электронная коммерция", value: 2 },
    ],
  },
  {
    name: "На каком этапе находится ваш проект?",
    navbarTitle: "TEST 3",
    key: "state",
    cards: [
      { title: "Новый проект", description: "Электронная коммерция", value: 1 },
      { title: "Существующий проект", description: "Электронная коммерция", value: 2 },
    ],
  },
  {
    name: "Как быстро хотите начать разработку?",
    navbarTitle: "TEST 4",
    key: "start_date",
    cards: [
      { title: "Как можно скорее", description: "Электронная коммерция", value: 1 },
      { title: "В течение пару недель", description: "Электронная коммерция", value: 2 },
      { title: "В течение пару месяцев", description: "Электронная коммерция", value: 3 },
    ],
  },
];

export const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
