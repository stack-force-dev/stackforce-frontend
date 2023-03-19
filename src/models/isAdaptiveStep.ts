import { stepActiveInputs } from './stepStatus';

export type IsAdaptiveData = {
  is_adaptive: boolean;
};
export type IsAdaptiveFormProps = {
  updateFields: (fields: Partial<IsAdaptiveData>) => void;
  next: () => void;
  setStepStatus: React.Dispatch<React.SetStateAction<stepActiveInputs>>;
};
