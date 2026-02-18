import { customAxiosRequest } from '../utils/api/customAxiosRequest';
import type { Phone, PhoneDetails } from '../types/phonesTypes';

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

export const getPhoneDetails = (id: string): Promise<PhoneDetails> => {
  return customAxiosRequest<PhoneDetails>({
    method: 'GET',
    url: `/products/${id}`,
  });
};
