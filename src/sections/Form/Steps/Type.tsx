import React from 'react';
import TypeItem from '../components/TypeItem/TypeItem';
import FormWrapper from '../FormWrapper/FormWrapper';

const typeItem = [
  { title: 'Электронная коммерция', subTitle: 'Электронная коммерция' },
  { title: 'Обслуживание клиентов', subTitle: 'Электронная коммерция' },
  { title: 'Интранет-портал', subTitle: 'Электронная коммерция' },
  { title: 'Другой', subTitle: 'Электронная коммерция' },
];

type TypeData = {
  type: string;
};
type TypeFormProps = TypeData & {
  updateFields: (fields: Partial<TypeData>) => void;
};

const Type = ({ type, updateFields }: TypeFormProps) => {
  return (
    <FormWrapper title="Выберите тип вашего проекта">
      {typeItem.map((item) => (
        <TypeItem key={item.title} title={item.title} subtitle={item.subTitle} updateFields={updateFields} />
      ))}
    </FormWrapper>
  );
};

export default Type;
