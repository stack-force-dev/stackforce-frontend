import { stepActiveInputs } from './stepStatus';

export type StateData = {
  state: string;
};
export type StateFormProps = {
  updateFields: (fields: Partial<StateData>) => void;
  next: () => void;
  setStepStatus: React.Dispatch<React.SetStateAction<stepActiveInputs>>;
};
