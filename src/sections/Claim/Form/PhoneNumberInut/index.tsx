import React, { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction } from "react";

import type { FormData } from "@interfaces/claim";

const formattedPhoneNumber = (input: EventTarget & HTMLInputElement) => {
  let phoneNumber = input.value.replace(/\D/g, "");
  let formattedValue = "";
  if (!phoneNumber) return "";

  if (["7"].includes(phoneNumber[0])) {
    let firstSymbols = "+7";
    formattedValue = input.value = firstSymbols + " ";
    if (phoneNumber.length > 1) {
      formattedValue += "(" + phoneNumber.substring(1, 4);
    }
    if (phoneNumber.length >= 5) {
      formattedValue += ") " + phoneNumber.substring(4, 7);
    }
    if (phoneNumber.length >= 8) {
      formattedValue += "-" + phoneNumber.substring(7, 9);
    }
    if (phoneNumber.length >= 10) {
      formattedValue += "-" + phoneNumber.substring(9, 11);
    }
  } else {
    formattedValue = "+" + phoneNumber.substring(0, 16);
  }
  return formattedValue;
};

type PhoneNumberInutProps = {
  value: string;
  setValue: Dispatch<SetStateAction<FormData>>;
};

const PhoneNumberInut = ({ setValue, value }: PhoneNumberInutProps) => {
  const handleOnChangeNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumberStr = formattedPhoneNumber(event.target);
    setValue((prev) => ({ ...prev, phone: formattedPhoneNumberStr }));
  };

  return <input name="phone" onChange={handleOnChangeNumber} value={value} type="tel" maxLength={18} />;
};

export default PhoneNumberInut;
