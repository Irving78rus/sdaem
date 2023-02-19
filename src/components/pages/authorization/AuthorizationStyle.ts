import styled from 'styled-components';
import CityMap from '../../../assets/icon/city-map.png';

export const Auth = styled.main`
  background-image: url(${CityMap}),
  linear-gradient(1.09deg, #7e6af3 0.86%, #6540cd 99.01%);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const AuthContent = styled.section`
  width: 100%;
  max-width: 406px;
  box-sizing: border-box;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fffefe;
  box-shadow: 0px 20px 40px rgba(39, 95, 158, 0.2);
  border-radius: 10px;
`;

export const AuthTitle = styled.h2`
  margin: 0;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
`;

export const AuthSubtitle = styled.p`
  margin: 15px 0 0;
  font-size: 14px;
  line-height: 17px;
  color: #686868;
  text-align: center;
  width: 75%;
`;
 
export const AuthFormCreateUser = styled.p`
  margin: 50px 0 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #686868;
  a {
    text-decoration: none;
    font-weight: 500;
    line-height: 26px;
    color: #664ef9;
  }
`;
