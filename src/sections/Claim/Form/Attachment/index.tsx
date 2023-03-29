import React from "react";

import Icon from "@root/components/Icon";

import styles from "./styles.m.scss";

type AttachmentProps = {
  handleDeleteAttachment: (parametr: string) => void;
  fileName: string;
  fileSize: number;
};

const Attachment = ({ handleDeleteAttachment, fileName, fileSize }: AttachmentProps) => {
  return (
    <div onClick={() => handleDeleteAttachment(fileName)} className={styles.attachmentFileContainer}>
      <Icon name="attachmentFile" />
      <div className={styles.wrapper}>
        <div className={styles.wrapperName}>
          <div className={styles.attachmentFileName}>
            {fileName.length > 12 ? `${fileName.substring(0, 11)}...` : fileName}
          </div>
          <div className={styles.btn}>
            <Icon name="delFile" />
          </div>
        </div>
        <div className={styles.attachmentFileSize}>
          {fileSize > 1024 ? `${(fileSize / 1024).toFixed(2)} Мб` : `${fileSize.toFixed(2)} Кб`}
        </div>
      </div>
    </div>
  );
};

export default Attachment;
