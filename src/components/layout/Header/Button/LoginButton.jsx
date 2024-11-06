import React from 'react';
import { ButtonContainer } from './style';
import Button from '../../../common/Button/Button';
import { useNavigate } from 'react-router-dom';
import { getRefresh, handleloginRedirect } from '../../../../api/oauth';

const LoginButton = (props) => {
  const navigate = useNavigate();
  const handleSignupButtonClick = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    const res = getRefresh(refreshToken);
  };
  return (
    <ButtonContainer>
      <Button
        bgcolor="#fff"
        fontcolor="#1B75D0"
        bordercolor="#1B75D0"
        onClickHandler={handleloginRedirect}
        text="Log out"
      />
      {/* <Button onClickHandler={handleSignupButtonClick} text="Sign up" /> */}
    </ButtonContainer>
  );
};

export default LoginButton;
