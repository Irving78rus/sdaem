import {
  PopupSuccess,
  PopupSuccessWindow,
  PopupSuccessTitle,
  PopupSuccessText,
  PopupSuccessCloseButton,
} from './style';
import { ShowPopupProps } from '../СontactsComponent';

export const PopupSuccessComponent = ({ setIsShowPopup }: ShowPopupProps) => {
  return (
    <PopupSuccess>
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
    </PopupSuccess>
  );
};
