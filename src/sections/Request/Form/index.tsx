import React, { useState } from 'react';

import type { FormData } from '../../../types/request';

type FormProps = {
  handleSubmit: (payload: FormData) => void;
};

const From = ({ handleSubmit }: FormProps) => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    phone: '',
    message: '',
  });
  return <div>FORM</div>;
};

export default From;
