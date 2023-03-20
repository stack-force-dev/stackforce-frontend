import React, { useState } from 'react';

import type { FormData } from '../../../types/request';

import styles from './styles.m.scss';

type FormProps = {
  handleSubmit: (payload: FormData) => void;
};

const From = ({ handleSubmit }: FormProps) => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    phone: '',
    message: '',
  });

  // <input
  //   type="text"
  //   placeholder="Имя Фамилия"
  //   onblur="placeholder='Имя Фамилия'"
  //   onfocus="this.placeholder=''"
  //   name="name"
  //   id="name"
  //   class="input"
  //   data-parsley-id="33"
  // ></input>;
  return (
    <div className={styles.container}>
      <div className={styles.title}>Ваши контакты</div>
      <form className={styles.wrapper}>
        <div className={styles.npeContainer}>
          <div className={styles.inputWrapper}>
            <div className={styles.label}>Имя</div>
            <input
              type="text"
              placeholder="Имя Фамилия"
              onFocus={(e) => (e.target.placeholder = '')}
              onBlur={(e) => (e.target.placeholder = 'Имя Фамилия')}
            />
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.label}>Номер телефона</div>
            <input type="text" value="+7 " />
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.label}>Электронная почта</div>
            <input
              type="text"
              placeholder="Рабочий email"
              onFocus={(e) => (e.target.placeholder = '')}
              onBlur={(e) => (e.target.placeholder = 'Рабочий email')}
            />
          </div>
        </div>
        <div className={styles.message}>
          <div className={styles.label}>Ваше сообщение</div>
          <textarea
            placeholder="Сроки запуска, бюджет, требования, ваши пожелания ..."
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = 'Сроки запуска, бюджет, требования, ваши пожелания ...')}
            className={styles.textarea}
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default From;
