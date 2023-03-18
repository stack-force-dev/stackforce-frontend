import React from 'react';
type StartDateData = {
  start_date: string;
};
type StartDateProps = StartDateData & {
  updateFields: (fields: Partial<StartDateData>) => void;
};
const StartDate = ({ start_date, updateFields }: StartDateProps) => {
  return <div>StartDate</div>;
};

export default StartDate;
