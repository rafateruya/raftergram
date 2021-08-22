import TextField from '@material-ui/core/TextField';
import React, { useCallback } from 'react';

interface TextInputProps {
  value: string;
  setValue: (newValue: string) => void;
  label: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  value,
  setValue,
  label,
}) => {
  const onChange = useCallback((event: { target: { value: string } }) => {
    setValue(event.target.value);
  }, []);
  return (
    <TextField
      variant="outlined"
      label={label}
      value={value}
      onChange={onChange}
    />
  );
};
