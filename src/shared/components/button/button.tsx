import { Button, ButtonProps } from 'antd';

interface ButtonSharedProps extends ButtonProps {
  children: React.ReactNode;
}

const ButtomShared = ({ children, ...props }: ButtonSharedProps) => {
  return (
    <Button type="primary" {...props}>
      {children}
    </Button>
  );
};

export default ButtomShared;
