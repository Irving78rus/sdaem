import { useState } from 'react';
import { ContactsInformation } from './modules/ContactsInformation/ContactsInformation';
import { FormMessage } from './modules/FormMessage/FormMessage';
import { PopupSuccess} from './modules/PopupSuccess/PopupSuccess';
import { Contacts } from './СontactsComponentStyle';

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