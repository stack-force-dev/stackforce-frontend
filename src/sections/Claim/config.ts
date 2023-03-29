import { StepType } from "../../interfaces/claim";

export const stepsCards: Array<StepType> = [
  {
    name: "Направление вашего проекта",
    key: "type",
    cards: [
      { title: "Электронная коммерция", value: 1, iconName: "form-1-1" },
      { title: "Обслуживание клиентов", value: 2, iconName: "form-1-2" },
      { title: "Личный кабинет", value: 3, iconName: "form-1-3" },
      { title: "Другой", value: 4, iconName: "form-1-4" },
    ],
  },
  {
    name: "Адаптив под маленькие экраны",
    key: "is_adaptive",
    cards: [
      { title: "Адаптивный сайт", value: 1, iconName: "form-2-1" },
      { title: "Без адаптивов", value: 2, iconName: "form-2-2" },
    ],
  },
  {
    name: "Текущий статус проекта",
    key: "state",
    cards: [
      { title: "Новый проект", value: 1, iconName: "form-3-1" },
      { title: "Существующий проект", value: 2, iconName: "form-3-1" },
    ],
  },
  {
    name: "Время старта разработки",
    key: "start_date",
    cards: [
      { title: "Немедленно", value: 1, iconName: "form-4-1" },
      { title: "В течение недели", value: 2, iconName: "form-4-2" },
      { title: "В течение месяца", value: 3, iconName: "form-4-3" },
    ],
  },
];

export const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
