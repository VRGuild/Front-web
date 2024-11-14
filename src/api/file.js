import { PostAxiosInstance } from '../axios/AxiosMethod';

export const uploadFiles = async (file, filepath) => {
  const formData = new FormData();
  formData.append('multipartFiles', file);
  formData.append('filePath', filepath);
  try {
    const res = await PostAxiosInstance('/api/files', formData);
    return res;
  } catch (error) {
    console.error(error);
  }
};
