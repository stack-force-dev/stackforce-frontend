import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { emailRegex } from './formRegex';
import { fetchForm } from '../../api/serviceForm';

import styles from './styles.m.scss';

interface Inputs {
  email: string;
  phone?: string;
  message: string;
  type?: string;
  is_adaptive?: boolean;
  state?: string;
  start_date?: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<Inputs>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const sendForm = async (data: Inputs) => {
      const response = await fetchForm(data);
      alert(JSON.stringify(response));
    };
    sendForm(data);
    reset();
  };

  return (
    <section className={styles.form}>
      <div>TEST</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('email', {
            required: 'Не указана почта',
            pattern: { value: emailRegex, message: 'Неверный формат почты' },
          })}
          placeholder="введите почту"
        />
        {errors?.email && <p>{errors?.email?.message}</p>}
        <div>
          <input {...register('message', { required: true })} placeholder="сообщение" />
        </div>
        <div>
          <input type="submit" disabled={!isValid} />
        </div>
      </form>
    </section>
  );
};

export default Form;
