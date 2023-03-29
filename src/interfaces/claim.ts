export type StepsData = {
  type: number | null;
  is_adaptive: boolean | null;
  state: number | null;
  start_date: number | null;
};

export type CardType = {
  title: string;
  value: number;
  iconName?: string;
};

export type StepType = {
  name: string;
  key: keyof StepsData;
  cards: Array<CardType>;
};

export type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  files: Array<string | ArrayBuffer | null>;
};

export type AttachmentData = {
  name: string;
  base64: string | ArrayBuffer | null;
  size: number;
};
