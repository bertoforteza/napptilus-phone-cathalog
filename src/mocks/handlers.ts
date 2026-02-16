import { http, HttpResponse } from 'msw';
import phonesMock from './phonesMock';

const baseURL = import.meta.env.VITE_API_BASE_URL;

export const handlers = [
  http.get(`${baseURL}/products?limit=20`, ({ request }) => {
    const url = new URL(request.url);
    if (url.searchParams.get('search')) {
      return HttpResponse.json(phonesMock.slice(0, 1));
    }
    return HttpResponse.json(phonesMock);
  }),
];
