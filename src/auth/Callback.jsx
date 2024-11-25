import React, { useEffect } from 'react';
import { checkIsRegisted, getToken } from '../api/oauth';
import { useNavigate } from 'react-router-dom';
import { useStore, usePersistentStore } from '../zustand/Store';
const Callback = () => {
  const navigate = useNavigate();
  const { setIsLogin } = usePersistentStore();
  useEffect(() => {
    const getAccessToken = async () => {
      await getToken();
      const res = await checkIsRegisted();
      if (res) {
        navigate('/home');
        setIsLogin(true);
      } else navigate('/regist');
    };
    getAccessToken();
  }, []);
};

export default Callback;
