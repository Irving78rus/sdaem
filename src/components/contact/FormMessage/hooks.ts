import { useMutation } from 'react-query';
import axios from 'axios';

interface UserMessagesProps {
  name: string;
  email: string;
  text: string;
}

export const useSendUserMessagesProps = () => {
  return useMutation((data: UserMessagesProps) => {
    return axios.post('http://localhost:3000/userMessages', data);
  });
};
