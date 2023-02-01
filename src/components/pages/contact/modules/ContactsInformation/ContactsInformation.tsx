import {
  ContactsInformationStl,
  ContactsInformationTitle,
  ContactsInformationSubtitle,
  ContactsInformationData,
  ContactsInformationAddress,
  ContactsInformationTelephone,
  ContactsInformationEmail,
  ContactsInformationClock,
  ContactsInformationLegal,
  ContactsInformationWarning,
  ContactsInformationWarningText,
} from './ContactsInformationStyle';

import { WarningImageComponent } from '../../../../share/WarningImage/WarningImageComponent';

export const ContactsInformation = () => {
  return (
    <ContactsInformationStl>
      <ContactsInformationTitle>Контакты</ContactsInformationTitle>
      <ContactsInformationSubtitle>
        Если у Вас есть пожелания, предложения или претензии по организации
        работы сайта мы всегда рады услышать Ваше мнение.
      </ContactsInformationSubtitle>
      <ContactsInformationData>
        <ContactsInformationAddress>
          220068, РБ, г. Минск, ул. Осипенко, 21, кв.23
        </ContactsInformationAddress>
        <ContactsInformationTelephone>
          +375 29 621-48-33
        </ContactsInformationTelephone>
        <ContactsInformationEmail>sdaem@sdaem.by</ContactsInformationEmail>
        <ContactsInformationClock>
          Режим работы: 08:00-22:00
        </ContactsInformationClock>
      </ContactsInformationData>
      <ContactsInformationLegal>
        <p>ИП Шушкевич Андрей Викторович</p>
        <p>УНП 192602485 Минским горисполкомом 10.02.2016</p>
      </ContactsInformationLegal>
      <ContactsInformationWarning>
        <WarningImageComponent color={'#5039BD'} />
        <ContactsInformationWarningText>
          Администрация сайта не владеет информацией о наличии свободных квартир
        </ContactsInformationWarningText>
      </ContactsInformationWarning>
    </ContactsInformationStl>
  );
};
