import React from 'react';
import { IsAdaptiveData, IsAdaptiveFormProps } from '../../../models/isAdaptiveStep';
import IsAdaptiveItem from '../components/IsAdaptiveItem/IsAdaptiveItem';
import FormWrapper from '../FormWrapper/FormWrapper';

const isAdaptiveItems = [
  { title: 'Сайт с мобильной и планшетной версиями', subTitle: 'Электронная коммерция', IsAdaptive: true },
  { title: 'Только десктопная версия', subTitle: 'Электронная коммерция', IsAdaptive: false },
];

const IsAdaptive = ({ is_adaptive, updateFields, next, setStepStatus }: IsAdaptiveData & IsAdaptiveFormProps) => {
  return (
    <FormWrapper title="Выберите тип вашего проекта">
      {isAdaptiveItems.map((item) => (
        <IsAdaptiveItem
          key={item.title}
          title={item.title}
          subtitle={item.subTitle}
          value={item.IsAdaptive}
          updateFields={updateFields}
          next={next}
          setStepStatus={setStepStatus}
        />
      ))}
    </FormWrapper>
  );
};

export default IsAdaptive;
