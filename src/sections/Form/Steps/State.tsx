import React from 'react';
import { StateData, StateFormProps } from '../../../models/stateStep';
import StateItem from '../components/StateItem/StateItem';
import FormWrapper from '../FormWrapper/FormWrapper';

const stateItem = [
  { title: 'Новый проект', subTitle: 'Электронная коммерция' },
  { title: 'Существующий проект', subTitle: 'Электронная коммерция' },
];
const State = ({ state, updateFields, next, setStepStatus }: StateData & StateFormProps) => {
  return (
    <FormWrapper title="На каком этапе находится ваш проект?">
      {stateItem.map((item) => (
        <StateItem
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

export default State;
