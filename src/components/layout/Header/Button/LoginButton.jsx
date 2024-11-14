import React from 'react';
import { ButtonContainer } from './style';
import Button from '../../../common/Button/Button';
import { useNavigate } from 'react-router-dom';
import { getRefresh, handleloginRedirect } from '../../../../api/oauth';
import useStore from '../../../../zustand/Store';

const LoginButton = (props) => {
  const { isLogin, setIsLogin } = useStore();

  return (
    <ButtonContainer>
      {!isLogin ? (
        <Button
          bgcolor="#fff"
          fontcolor="#393939"
          bordercolor="#393939"
          onClickHandler={handleloginRedirect}
          text="Log in"
        />
      ) : (
        <Button
          onClickHandler={() => {
            localStorage.clear();
            setIsLogin(false);
            window.location.reload;
          }}
          text="Log out"
        />
      )}
    </ButtonContainer>
  );
};

export default LoginButton;
