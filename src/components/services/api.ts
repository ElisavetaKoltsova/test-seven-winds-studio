import axios, { AxiosResponse, AxiosInstance, AxiosError } from 'axios';
import { StatusCodes } from 'http-status-codes';

const BACKEND_URL = 'http://185.244.172.108:8081/v1/outlay-rows/entity/148635/';
const REQUEST_TIMEOUT = 5000;

type DetailMessageType = {
  type: string;
  message: string;
}

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const detailMessage = (error.response.data);

        console.log(detailMessage);
      }

      throw error;
    }
  );

  return api;
};
