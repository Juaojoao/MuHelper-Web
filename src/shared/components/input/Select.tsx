import { Select, SelectProps } from 'antd';

interface OptionItem {
  value: number;
  label: string;
}

interface SelectSharedProps extends SelectProps<any> {
  defaultValue: string;
  options: OptionItem[];
  id?: string; // Torna a propriedade 'id' opcional
}

const SelectShared = ({ defaultValue, options, id, ...props }: SelectSharedProps) => {
  const selectOptions = options.map((option) => ({
    value: option.value.toString(),
    label: option.label,
  }));

  return (
    <Select labelInValue defaultValue={defaultValue} options={selectOptions} id={id} {...props} />
  );
};

export default SelectShared;
