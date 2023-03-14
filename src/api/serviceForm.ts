import axios from 'axios';

interface dataType {
  email: string;
  phone?: string;
  message: string;
  type?: string;
  is_adaptive?: boolean;
  state?: string;
  start_date?: string;
}

export const fetchForm = async (inputData: dataType) => {
  const { email, message } = inputData;
  const { data } = await axios.post(`https://api.stackforce.ru/v1/claim`, {
    email,
    message,
  });
  return data;
};
