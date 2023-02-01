import {
  PopupSuccess,
  PopupSuccessWindow,
  PopupSuccessTitle,
  PopupSuccessText,
  PopupSuccessCloseButton,
} from './style';

import { useNavigate } from 'react-router-dom';

export interface ShowPopupProps {
  setIsShowPopup: (isShowPopup: boolean) => void;
  title?: string;
  text?: string;
  buttonText?: string;
  register?: boolean;
}

export const PopupSuccessComponent = ({  setIsShowPopup,
  title,
  text,
  buttonText,
  register,
}: ShowPopupProps) => {
  const navigate = useNavigate();
  
  return (
    <PopupSuccess>
      <PopupSuccessWindow>
        <PopupSuccessTitle>{title}</PopupSuccessTitle>
        <PopupSuccessText>{text}</PopupSuccessText>
        <PopupSuccessCloseButton
          onClick={() => {
            setIsShowPopup(false);
            if (register) navigate('/Authorization');
          }}
        >
          {buttonText}
        </PopupSuccessCloseButton>
      </PopupSuccessWindow>
    </PopupSuccess>
  );
};
