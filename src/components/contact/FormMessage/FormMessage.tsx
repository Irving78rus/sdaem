import {
  FormMessageStl,
  FormMessageUserInfo,
  FormMessageUserName,
  FormMessageUserEmail,
  FormMessageUserMessage,
  FormMessageButton,
} from './FormMessageStyle';
import { ShowPopupProps } from '../СontactsComponent';

export const FormMessage = ({ setIsShowPopup }: ShowPopupProps) => {
  return (
    <>
      <FormMessageStl>
        <FormMessageUserInfo>
          <label>
            Ваше имя
            <FormMessageUserName
              placeholder='Введите имя'
              required
            />
          </label>
          <label>
            Ваша электронная почта
            <FormMessageUserEmail
              placeholder='Введите email'
              required
            />
          </label>
        </FormMessageUserInfo>
        <label>
          Ваше сообщение
          <FormMessageUserMessage
            placeholder='Сообщение'
            required
          />
        </label>
        <FormMessageButton>Отправить</FormMessageButton>
      </FormMessageStl>
    </>
  );
};
