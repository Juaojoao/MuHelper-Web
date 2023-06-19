import { ButtonHTMLAttributes } from 'react';
import '../button/style.css';

interface ButtonSharedProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  loading?: boolean;
}

const ButtomShared = ({ value, loading, ...props }: ButtonSharedProps) => {
  return (
    <button className="btn" type="submit" {...props}>
      {value}
    </button>
  );
};

export default ButtomShared;
