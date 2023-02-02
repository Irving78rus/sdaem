import { WarningImage } from './style';

interface WarningImage {
  color: string;
}

export const WarningImageComponent = ({ color }: WarningImage) => {
  return <WarningImage color={color} />;
};
