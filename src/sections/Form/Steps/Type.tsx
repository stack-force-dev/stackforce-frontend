import React from 'react';
import { stepActiveInputs } from '../../../models/stepStatus';
import { TypeData, TypeFormProps } from '../../../models/typeProjectStep';
import TypeItem from '../components/TypeItem/TypeItem';
import FormWrapper from '../FormWrapper/FormWrapper';

const typeItem = [
  { title: 'Электронная коммерция', subTitle: 'Электронная коммерция' },
  { title: 'Обслуживание клиентов', subTitle: 'Электронная коммерция' },
  { title: 'Интранет-портал', subTitle: 'Электронная коммерция' },
  { title: 'Другой', subTitle: 'Электронная коммерция' },
];

const Type = ({ type, updateFields, next, setStepStatus }: TypeData & TypeFormProps) => {
  return (
    <FormWrapper title="Выберите тип вашего проекта">
      {typeItem.map((item) => (
        <TypeItem
          key={item.title}
          title={item.title}
          subtitle={item.subTitle}
          updateFields={updateFields}
          next={next}
          setStepStatus={setStepStatus}
        />
      ))}
    </FormWrapper>
  );
};

export default Type;
