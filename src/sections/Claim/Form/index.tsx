import classNames from "classnames";
import React, { ChangeEvent, useRef, useState } from "react";

import { emailRegex } from "../config";
import Icon from "@root/components/Icon";

import type { AttachmentData, FormData } from "@interfaces/claim";

import Attachment from "./Attachment";
import Input from "./Input";
import PhoneNumberInput from "./PhoneNumberInput";
import styles from "./styles.m.scss";

const initState: FormData = {
  name: "",
  email: "",
  phone: "+7",
  message: "",
  files: [],
};

const MAX_FILE_SIZE = 5 * 1024 * 1024;

type FormProps = {
  handleSendData: (payload: FormData) => void;
};

const Form = ({ handleSendData }: FormProps) => {
  const [formData, setFormData] = useState<FormData>(initState);
  const [checked, setChecked] = useState(false);
  const [errorEmailMessage, setErrorEmailMessage] = useState("");
  const [attachments, setAttachments] = useState<Array<AttachmentData>>([]);
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClickUploadFile = () => {
    if (hiddenFileInput.current) hiddenFileInput.current.click();
  };

  const handleDeleteAttachment = (name: string) => {
    const deletingFile = attachments?.find((file) => file.name === name);
    setAttachments(attachments?.filter((file) => file.name != name));
    setFormData({ ...formData, files: formData.files?.filter((file) => file !== deletingFile?.base64) });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!emailRegex.test(formData.email)) setErrorEmailMessage("Неверный формат");
    else {
      setErrorEmailMessage("");
      handleSendData(formData);
      setFormData(initState);
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const uploadFile = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (!files?.length) return;

    const file = files[0];

    if (file.size > MAX_FILE_SIZE) return console.error(file.name, " size too much");

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFormData((prev) => ({ ...prev, files: [...prev.files, reader.result] }));
      setAttachments((prev) => [...prev, { name: file.name, size: file.size / 1024, base64: reader.result }]);
    };
    reader.onerror = () => console.error("File upload error");
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formTitle}>Ваши контакты</div>
      <form className={styles.formWrapper} onSubmit={handleSubmit} encType="multipart/form-data">
        <div className={styles.inputsContainer}>
          <Input value={formData.name} onChange={onChange} name="name" placeholder="Имя Фамилия" label="Имя" />
          <div className={styles.inputWrapper}>
            <div className={styles.label}>Номер телефона</div>
            <PhoneNumberInput value={formData.phone} setValue={setFormData} />
          </div>
          <Input
            value={formData.email}
            onChange={onChange}
            name="email"
            placeholder="Рабочий email"
            label="Электронная почта"
            error={errorEmailMessage}
          />
        </div>
        <div className={styles.message}>
          <div className={styles.label}>Ваше сообщение</div>
          <textarea
            name="message"
            onChange={onChange}
            value={formData.message}
            placeholder="Сроки запуска, бюджет, требования, ваши пожелания..."
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Сроки запуска, бюджет, требования, ваши пожелания...")}
            className={styles.textarea}
          ></textarea>
        </div>
        <div className={styles.file}>
          {!!attachments &&
            attachments.map((file) => (
              <Attachment
                key={file.name}
                handleDeleteAttachment={handleDeleteAttachment}
                fileName={file.name}
                fileSize={file.size}
              />
            ))}
          {attachments.length < 3 && (
            <div onClick={handleClickUploadFile} className={styles.uploadFileBtn}>
              <Icon name="upload" />
              <div className={styles.btnTitleContainer}>
                <div className={styles.btnTitle}>Добавить файл</div>
                <div className={styles.btnSubtitle}>до 5 Мб</div>
              </div>
            </div>
          )}
          <input ref={hiddenFileInput} type="file" onChange={uploadFile} style={{ display: "none" }} />
        </div>
        <div className={styles.wrapperBtnCheck}>
          <button type="submit" className={classNames(styles.button, { [styles.active]: checked })}>
            Отправить заявку
          </button>
          <div className={styles.agreements}>
            <input
              className={styles.customCheckbox}
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
              name="c1"
              id="c1"
            />
            <>{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}</>
            <label htmlFor="c1"></label>
            <div className={styles.agreementsText}>
              Принимаю условия{" "}
              <a href="/docs/personal-info-policy.pdf" target="_blank">
                пользовательского соглашения
              </a>{" "}
              и{" "}
              <a href="#b" target="_blank">
                политики конфиденциальности
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
