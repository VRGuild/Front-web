import axios from 'axios';
import { getRefresh } from '../api/oauth';

const axiosInstance = axios.create({ baseURL: import.meta.env.VITE_BASE_URL });

axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      localStorage.clear();
      alert('로그인 해주세요');
      // window.location.href = '/home';
      throw new Error('토큰 없음');
    }

    config.headers['Authorization'] = `Bearer ${accessToken}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 토큰 관련 에러 처리
axiosInstance.interceptors.response.use(
  async (response) => {
    return response;
  },

  async (error) => {
    // 토큰 만료나 잘못된 토큰일 때 로그아웃 처리
    if (error.response?.data?.status === '449') {
      console.log('잘못된 토큰');
      const originalConfig = error.config;
      try {
        const refresh = localStorage.getItem('refreshToken');
        localStorage.clear();
        await getRefresh(refresh);
        const token = localStorage.getItem('accessToken');
        originalConfig.headers['Authorization'] = `Bearer ${token}`;
        return axiosInstance(originalConfig);
      } catch (e) {
        console.error(e);
        alert('토큰이 만료되었습니다. 다시 로그인 해주세요.');
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
