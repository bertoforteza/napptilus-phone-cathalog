import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { axiosInstance } from './axiosInstance';

export async function customAxiosRequest<T = unknown>(config: AxiosRequestConfig): Promise<T> {
  const response: AxiosResponse<T> = await axiosInstance(config);
  return response.data;
}
