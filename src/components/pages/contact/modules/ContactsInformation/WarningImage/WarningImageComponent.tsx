import { WarningImage } from './style';

interface WarningImageProps {
  color: string;
}

export const WarningImageComponent = ({ color }: WarningImageProps) => {
  return <WarningImage color={color} />;
};
