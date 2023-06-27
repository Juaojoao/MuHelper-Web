import React from 'react';
import { Input } from 'antd';

type SearchInputProps = {
  className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({className}) => {
  return (
    <Input.Search className={className} />
  );
};

export default SearchInput;