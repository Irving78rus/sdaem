import { Button } from './style';

interface ButtonProps {
  value: string;
}

export const FormButtonComponent = ({ value }: ButtonProps) => {
  return <Button>{value}</Button>;
};
