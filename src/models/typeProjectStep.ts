import { stepActiveInputs } from './stepStatus';

export type TypeData = {
  type: string;
};
export type TypeFormProps = {
  updateFields: (fields: Partial<TypeData>) => void;
  next: () => void;
  setStepStatus: React.Dispatch<React.SetStateAction<stepActiveInputs>>;
};
