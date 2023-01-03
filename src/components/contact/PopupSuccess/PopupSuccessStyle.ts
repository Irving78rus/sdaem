import styled from 'styled-components';

export const PopupSuccessStl = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  background-color: rgba(46, 46, 46, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PopupSuccessWindow = styled.div`
  box-sizing: border-box;
  max-width: 406px;
  max-height: 313px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 20px 40px rgba(39, 95, 158, 0.2);
  padding: 52px 31px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
`;

export const PopupSuccessTitle = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
`;

export const PopupSuccessText = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
`;

export const PopupSuccessCloseButton = styled.button.attrs({
  type: 'button',
})`
  background-color: #ffd54f;
  border-radius: 33px;
  padding: 12px 34px;
  margin-top: 10px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  border: none;
`;
