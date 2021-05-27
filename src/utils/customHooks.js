import { useState } from 'react';

export const useInputState = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: (newValue) => setValue((prev) => newValue),
  };
};
