import React from 'react';
import { Input, InputProps } from 'antd';

interface Props extends InputProps {
  name: string;
  type: string;
  placeholder?: string;
}

const InputShared: React.FC<Props> = ({ name, placeholder, type, ...props }) => {
  return (
    <Input
      name={name}
      id={name}
      type={type === '' ? 'text' : type}
      placeholder={placeholder}
      required
      {...props}
    />
  );
};

export default InputShared;
