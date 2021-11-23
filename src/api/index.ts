import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_DOMAIN,
});

export const request = {
  get: async (
    url: string,
    params: Record<string, string | number> = {}
  ): Promise<any> => await axiosInstance.get(url, params),
};
