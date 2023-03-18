import React from 'react';
type TypeData = {
  type: string;
};
type TypeFormProps = TypeData & {
  updateFields: (fields: Partial<TypeData>) => void;
};

const Type = ({ type, updateFields }: TypeFormProps) => {
  return <div>Type</div>;
};

export default Type;
