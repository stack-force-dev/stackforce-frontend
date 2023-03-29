import Icon from "@root/components/Icon";

import React from "react";

import styles from "./styles.m.scss";

type AttachmentFileProps = {
  handleClickDelAttachmentFile: (parametr: string) => void;
  fileName: string;
  fileSize: number;
};

const AttachmentFile = ({ handleClickDelAttachmentFile, fileName, fileSize }: AttachmentFileProps) => {
  return (
    <div onClick={() => handleClickDelAttachmentFile(fileName)} className={styles.attachmentFileContainer}>
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

export default AttachmentFile;
