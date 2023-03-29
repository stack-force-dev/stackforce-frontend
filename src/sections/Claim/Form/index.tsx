import React, { ChangeEvent, useRef, useState } from "react";

import Icon from "@root/components/Icon";

import type { AttachmentFileData, FormData } from "@interfaces/claim";

import styles from "./styles.m.scss";
import AttachmentFile from "./AttachmentFile";

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

  const [checked, setChecked] = useState(false);

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
    <div className={styles.formContainer}>
      <div className={styles.formTitle}>Ваши контакты</div>
      <form className={styles.formWrapper} onSubmit={handleSubmit} encType="multipart/form-data">
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
            placeholder="Сроки запуска, бюджет, требования, ваши пожелания..."
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Сроки запуска, бюджет, требования, ваши пожелания...")}
            className={styles.textarea}
          ></textarea>
        </div>
        <div className={styles.file}>
          <AttachmentFile
            handleClickDelAttachmentFile={handleClickDelAttachmentFile}
            fileName="Название файла"
            fileSize={3.22 * 1024}
          />
          <div onClick={handleClickUploadFile} className={styles.uploadFileBtn}>
            <Icon name="upload" />
            <div className={styles.btnTitleContainer}>
              <div className={styles.btntitle}>Добавить файл</div>
              <div className={styles.btnSubtitle}>до 5 Мб</div>
            </div>
          </div>
          <input ref={hiddenFileInput} type="file" onChange={uploadFile} style={{ display: "none" }} />
        </div>
        <div className={styles.wrapperBtnCheck}>
          <button type="submit" className={styles.btnSendForm}>
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
            <label htmlFor="c1"></label>
            <div className={styles.agreementsText}>
              Принимаю условия{" "}
              <a href="" target="_blank">
                пользовательского соглашения
              </a>{" "}
              и{" "}
              <a href="" target="_blank">
                политики конфиденциальности
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default From;
