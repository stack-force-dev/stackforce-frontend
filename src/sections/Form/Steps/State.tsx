import React from 'react';
type StateData = {
  state: string;
};
type StateFormProps = StateData & {
  updateFields: (fields: Partial<StateData>) => void;
};
const State = ({ state, updateFields }: StateFormProps) => {
  return <div>State</div>;
};

export default State;
