import React from 'react';
import { StartDateData, StartDateProps } from '../../../models/startDateStep';
import StartDateItem from '../components/StartDateItem/StartDateItem';
import FormWrapper from '../FormWrapper/FormWrapper';

const startDateItem = [
  { title: 'Как можно скорее', subTitle: 'Электронная коммерция' },
  { title: 'В течение пару недель', subTitle: 'Электронная коммерция' },
  { title: 'В течение пару месяцев', subTitle: 'Электронная коммерция' },
];

const StartDate = ({ start_date, updateFields, next, setStepStatus }: StartDateProps & StartDateData) => {
  return (
    <FormWrapper title="Как быстро хотите начать разработку?">
      {startDateItem.map((item) => (
        <StartDateItem
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

export default StartDate;
