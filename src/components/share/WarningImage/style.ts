import { ReactComponent as WarningIcon } from '../../../assets/img/warning.svg';
import styled from 'styled-components';

export const WarningImage = styled(WarningIcon)<{ color: string }>`
  width: 40px;
  height: 40px;
  fill: ${(props) => props.color};
`;
