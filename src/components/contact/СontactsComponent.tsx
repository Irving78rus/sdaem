import { useState } from 'react';
import { Contacts } from './СontactsComponentStyle';
import { ContactsInformation } from './ContactsInformation/ContactsInformation';
import { FormMessage } from './FormMessage/FormMessage';
import { PopupSuccess} from './PopupSuccess/PopupSuccess';

export interface ShowPopupProps { setIsShowPopup: (isShowPopup: boolean) => void}
  const СontactsComponent = () => {
  const [isShowPopup, setIsShowPopup] = useState(false);

  return (
    <>
      <Contacts>
        <ContactsInformation />
        <FormMessage setIsShowPopup={setIsShowPopup} />
      </Contacts>
      {isShowPopup && <PopupSuccess setIsShowPopup={setIsShowPopup} />}
    </>
  );
};
export default СontactsComponent; 