import axios from 'axios';
import { GetAxiosInstance, PostAxiosInstance } from '../axios/AxiosMethod';

const baseURL = import.meta.env.VITE_BASE_URL;

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
    const res = await GetAxiosInstance(`/api/project/detail/${projectId}`);
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const getAllRequests = async (page) => {
  try {
    const res = await axios.get(`${baseURL}/api/project/summary/${page}`);
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const getHomeRequests = async () => {
  try {
    const res = await axios.get(`${baseURL}/api/project/summary/home`);
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const getTeamData = async (projectId) => {
  try {
    const res = await GetAxiosInstance(`/api/team/${projectId}/support/list`);
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const acceptTeam = async (projectId, teamId) => {
  try {
    const res = await PostAxiosInstance(
      `/api/project/accept/epic/${projectId}/${teamId}`,
    );
    return res;
  } catch (e) {
    console.error(e);
  }
};
