import {
  FormMessage,
  FormMessageUserInfo,
  FormMessageUserName,
  FormMessageUserEmail,
  FormMessageUserMessage,
  FormMessageButton,
} from './style';
import { useSendUserMessagesProps } from './hooks';
import { PopupSuccessComponent } from '../PopupSuccess/PopupSuccessComponent';
 
import { ShowPopupProps } from '../СontactsComponent';
 

export const FormMessageComponent = ({ setIsShowPopup }: ShowPopupProps) => {
   

  return (
    <>
      <FormMessage
        noValidate
         
      >
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
      </FormMessage>
    </>
  );
};
