import { useState } from "react";

type BindType = {
  value: string;
  onInput: React.FormEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

const useInput = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);

  const reset = () => {
    setValue(initialValue);
  };

  const bind: BindType = {
    value,
    onInput: (event) => {
      setValue(event.currentTarget.value);
    },
  };

  return { value, bind, reset };
};

export default useInput;
