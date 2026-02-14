import { customAxiosRequest } from '../utils/api/customAxiosRequest';
import type { Phone } from '../types/phonesTypes';

export interface GetPhonesParams {
  search?: string;
  limit?: number;
  offset?: number;
}

export const getPhones = (params?: GetPhonesParams): Promise<Phone[]> => {
  return customAxiosRequest<Phone[]>({
    method: 'GET',
    url: '/products',
    params,
  });
};
