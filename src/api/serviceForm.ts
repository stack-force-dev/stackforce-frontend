import axios from 'axios';

const BASE_URL = 'https://api.stackforce.ru/v1';

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
  const { data } = await axios.post(`/claim`, {
    email,
    message,
  });
  return data;
};
