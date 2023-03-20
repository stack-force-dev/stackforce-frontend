import React, { ChangeEvent, useRef, useState } from "react";

import type { AttachmentFileData, FormData } from "@interfaces/request";

import styles from "./styles.m.scss";
import Icon from "@root/components/Icon";

type FormProps = {
  handleSendData: (payload: FormData) => void;
};
const initState: FormData = {
  name: "",
  email: "",
  phone: "+7 ",
  message: "",
  file: null,
};
const MAX_FILE_SIZE = 5 * 1024 * 1024;

const From = ({ handleSendData }: FormProps) => {
  const [formData, setFormData] = useState<FormData>(initState);
  const [attachmentFile, setAttachmentFile] = useState<AttachmentFileData>({ attached: false, name: "" });
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClickUploadFile = () => {
    if (hiddenFileInput.current) hiddenFileInput.current.click();
  };
  const handleClickDelAttachmentFile = () => {
    setAttachmentFile({ attached: false, name: "" });
    setFormData((prev) => ({ ...prev, file: null }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSendData(formData);
    setFormData(initState);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const uploadFile = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (!files?.length) return;

    const file = files[0];
    if (file.size > MAX_FILE_SIZE) return console.error("File size too much");

    setAttachmentFile({ attached: true, name: file.name });

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => setFormData((prev) => ({ ...prev, file: reader.result }));
    reader.onerror = () => console.error("File upload error");
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Ваши контакты</div>
      <form className={styles.wrapper} onSubmit={handleSubmit} encType="multipart/form-data">
        <div className={styles.npeContainer}>
          <div className={styles.inputWrapper}>
            <div className={styles.label}>Имя</div>
            <input
              name="name"
              onChange={onChange}
              value={formData.name}
              type="text"
              placeholder="Имя Фамилия"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Имя Фамилия")}
            />
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.label}>Номер телефона</div>
            <input name="phone" onChange={onChange} type="tel" value={formData.phone} />
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.label}>Электронная почта</div>
            <input
              required
              name="email"
              onChange={onChange}
              value={formData.email}
              type="email"
              placeholder="Рабочий email"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Рабочий email")}
            />
          </div>
        </div>
        <div className={styles.message}>
          <div className={styles.label}>Ваше сообщение</div>
          <textarea
            name="message"
            onChange={onChange}
            value={formData.message}
            placeholder="Сроки запуска, бюджет, требования, ваши пожелания ..."
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Сроки запуска, бюджет, требования, ваши пожелания ...")}
            className={styles.textarea}
          ></textarea>
        </div>
        <div className={styles.file}>
          <div onClick={handleClickUploadFile} className={styles.uploadFileBtn}>
            <Icon name="upload" />
            <div className={styles.btnTitleContainer}>
              <div className={styles.btntitle}>Добавить файл</div>
              <div className={styles.btnSubtitle}>до 5 Мб</div>
            </div>
          </div>
          {attachmentFile.attached && (
            <div onClick={handleClickDelAttachmentFile} className={styles.attachmentFileContainer}>
              <div className={styles.attachmentFileName}>{attachmentFile.name}</div>
              <div className={styles.attachmentFileCloseBtn}>
                <Icon name="delFile" fill="#b82428" />
              </div>
            </div>
          )}
          <input ref={hiddenFileInput} type="file" onChange={uploadFile} style={{ display: "none" }} />
        </div>
        <button type="submit" className={styles.btnSendForm}>
          Отправить заявку
        </button>
      </form>
    </div>
  );
};

export default From;
