export type StepsData = {
  type: number | null;
  is_adaptive: boolean | null;
  state: number | null;
  start_date: number | null;
};

export type CardType = {
  title: string;
  description: string;
  value: number | boolean;
  iconName?: string;
};

export type StepType = {
  name: string;
  navbarTitle: string;
  key: keyof StepsData;
  cards: Array<CardType>;
};

export type FormData = {
  email: string;
  phone: string;
  message: string;
};
