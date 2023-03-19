import { stepActiveInputs } from './stepStatus';

export type StartDateData = {
  start_date: string;
};
export type StartDateProps = {
  updateFields: (fields: Partial<StartDateData>) => void;
  next: () => void;
  setStepStatus: React.Dispatch<React.SetStateAction<stepActiveInputs>>;
};
