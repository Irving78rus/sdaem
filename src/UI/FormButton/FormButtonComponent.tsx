import { Button } from './style';

interface ButtonProps {
  value: string;
}

export const FormButtonComponent = (props:ButtonProps) => {
  return <Button>{props.value}</Button>;
};
