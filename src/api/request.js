import axios from 'axios';
import { GetAxiosInstance, PostAxiosInstance } from '../axios/AxiosMethod';

export const registRequestInfo = async (projectInfo) => {
  try {
    const res = await PostAxiosInstance('/api/project', projectInfo);
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const getRequestDetail = async (projectId) => {
  try {
    const res = await GetAxiosInstance(`/api/project/${projectId}`);
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const getAllRequests = async (page) => {
  try {
    const res = await GetAxiosInstance(
      `/api/project/summary/pagination?page=${page}`,
    );
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const getHomeRequests = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/project/summary/home`,
    );
    return res;
  } catch (e) {
    console.error(e);
  }
};
