import { Button } from './style';

interface ButtonProps {
  value: string;
}

export const FormButtonComponent = (props:any) => {
  return <Button>{props.value}</Button>;
};
