import axios from 'axios';
import { GetAxiosInstance, PostAxiosInstance } from '../axios/AxiosMethod';
import { uploadFiles } from './file';
import { useStore } from '../zustand/Store';

const baseURL = import.meta.env.VITE_BASE_URL;
const url = `${import.meta.env.VITE_LOGIN_URL}${import.meta.env.VITE_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_REDIRECT_URL}&response_type=code&scope=basic_profile&scope=friends_list&scope=presence`;

export const handleloginRedirect = () => {
  window.location.href = url;
};

// export const getToken = async () => {
//   try {
//     const urlParams = new URLSearchParams(window.location.search);
//     const code = urlParams.get('code');
//     const body = new URLSearchParams();
//     body.append('grant_type', 'authorization_code');
//     body.append('deployment_id', import.meta.env.VITE_DEPLOY_ID);
//     body.append('scope', 'basic_profile friends_list presence');
//     body.append('code', code);
//     const headers = {
//       'Content-Type': 'application/x-www-form-urlencoded',
//       Authorization: `Basic ${import.meta.env.VITE_BASIC_TOKEN}`,
//     };
//     const res = await axios.post(
//       'https://api.epicgames.dev/api/epic/auth/v2/token',
//       body,
//       { headers },
//     );
//     localStorage.setItem('accessToken', res.data.access_token);
//     localStorage.setItem('refreshToken', res.data.refresh_token);
//   } catch (e) {
//     console.error(e);
//   }
// };

export const getToken = async () => {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const res = await axios.post(`${baseURL}/api/auth/epicgames/callback`, {
      code: code,
    });
    localStorage.setItem('accessToken', res.data.access_token);
    localStorage.setItem('refreshToken', res.data.refresh_token);
  } catch (error) {
    console.error(error);
  }
};

// export const getRefresh = async (refreshToken) => {
//   try {
//     const body = new URLSearchParams();
//     body.append('grant_type', 'refresh_token');
//     body.append('scope', 'basic_profile friends_list presence');
//     body.append('refresh_token', refreshToken);
//     const headers = {
//       'Content-Type': 'application/x-www-form-urlencoded',
//       Authorization: `Basic ${import.meta.env.VITE_BASIC_TOKEN}`,
//     };
//     const res = await axios.post(
//       'https://api.epicgames.dev/api/epic/oauth/v2/token',
//       body,
//       { headers },
//     );
//     localStorage.setItem('accessToken', res.data.access_token);
//     localStorage.setItem('refreshToken', res.data.refresh_token);
//     console.log(res);
//   } catch (e) {
//     console.error(e);
//   }
// };

export const getRefresh = async (refreshToken) => {
  try {
    const headers = {
      Authorization: refreshToken,
    };
    const res = await axios.post(
      `${baseURL}/api/auth/epicgames/callback`,
      headers,
    );
    localStorage.setItem('accessToken', res.data.access_token);
    localStorage.setItem('refreshToken', res.data.refresh_token);
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const checkIsRegisted = async () => {
  try {
    const res = await GetAxiosInstance('/api/auth/epicgames/login');
    console.log(res.status);
    if (res?.status == '222') return true;
    else return false;
  } catch (e) {
    console.error(e);
  }
};

export const registClient = async ({
  nickname,
  businessName,
  businessLogo,
  managerName,
  managerPhone,
}) => {
  try {
    let fileURLs = [];
    const res = await uploadFiles(businessLogo, 'logo/');
    fileURLs = res.data.fileURLs;
    const businessLogoUrl = fileURLs[0];
    await PostAxiosInstance('/api/epic/businesses', {
      nickname,
      businessName,
      businessLogoImg: businessLogoUrl,
      managerName,
      managerPhone,
    });
  } catch (e) {
    console.error(e);
  }
};
