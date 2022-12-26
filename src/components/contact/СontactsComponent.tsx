import { useState } from 'react';
import { Contacts } from './style';
import { ContactsInformationComponent } from './ContactsInformation/ContactsInformationComponent';
import { FormMessageComponent } from './FormMessage/FormMessageComponent';
import { PopupSuccessComponent } from './PopupSuccess/PopupSuccessComponent';

export interface ShowPopupProps {
  setIsShowPopup: (isShowPopup: boolean) => void;
}

  const СontactsComponent = () => {
  const [isShowPopup, setIsShowPopup] = useState(false);

  return (
    <>
      <Contacts>
        <ContactsInformationComponent />
        <FormMessageComponent setIsShowPopup={setIsShowPopup} />
      </Contacts>
      {isShowPopup && <PopupSuccessComponent setIsShowPopup={setIsShowPopup} />}
    </>
  );
};
export default СontactsComponent; 