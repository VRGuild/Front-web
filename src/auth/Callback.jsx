import React, { useEffect } from 'react';
import { checkIsRegisted, getToken } from '../api/oauth';
import { useNavigate } from 'react-router-dom';
const Callback = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const getAccessToken = async () => {
      await getToken();
      const res = await checkIsRegisted();
      if (res) navigate('/home');
      else navigate('/regist');
    };
    getAccessToken();
  }, []);
};

export default Callback;
