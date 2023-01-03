import {
  PopupSuccessStl,
  PopupSuccessWindow,
  PopupSuccessTitle,
  PopupSuccessText,
  PopupSuccessCloseButton,
} from './PopupSuccessStyle';
import { ShowPopupProps } from '../СontactsComponent';

export const PopupSuccess = ({ setIsShowPopup }: ShowPopupProps) => {
  return (
    <PopupSuccessStl>
      <PopupSuccessWindow>
        <PopupSuccessTitle>Ваше письмо отправлено!</PopupSuccessTitle>
        <PopupSuccessText>
          Какое-то сообщение о том, что письмо отправлено, какое-то сообщение,
          что письмо отправлено.
        </PopupSuccessText>
        <PopupSuccessCloseButton onClick={() => setIsShowPopup(false)}>
          Закрыть окно
        </PopupSuccessCloseButton>
      </PopupSuccessWindow>
    </PopupSuccessStl>
  );
};
