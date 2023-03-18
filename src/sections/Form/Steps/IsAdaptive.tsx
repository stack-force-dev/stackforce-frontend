import React from 'react';
type IsAdaptiveData = {
  is_adaptive: boolean;
};
type IsAdaptiveFormProps = IsAdaptiveData & {
  updateFields: (fields: Partial<IsAdaptiveData>) => void;
};
const IsAdaptive = ({ is_adaptive, updateFields }: IsAdaptiveFormProps) => {
  return <div>IsAdaptive</div>;
};

export default IsAdaptive;
