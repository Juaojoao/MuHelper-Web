import { Button as ButtonAntD, ButtonProps} from 'antd';

interface AddButtonProps extends ButtonProps {
  value: string;
}

const AddButton = ({ value, ...props }: AddButtonProps) => {
  return (
    <ButtonAntD type="primary" {...props}>
      {value}
    </ButtonAntD>
  );
};

export default AddButton;
