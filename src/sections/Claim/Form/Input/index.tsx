import classNames from "classnames";
import React, { ChangeEvent } from "react";

import styles from "../styles.m.scss";

type InputProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  name: string;
  label: string;
  error?: string;
};
const Input = ({ value, onChange, placeholder, name, label, error }: InputProps) => {
  return (
    <div className={classNames(styles.inputWrapper, { [styles.errorUnderline]: error })}>
      <div className={styles.label}>{label}</div>
      <input
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) => (e.target.placeholder = placeholder)}
      />
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};

export default Input;
