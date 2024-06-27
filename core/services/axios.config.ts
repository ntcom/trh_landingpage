/*
 * Created Date: 28-04-2023, 9:45 pm
 * Author: Nguyễn Hữu Dương
 * Email: duonghd1803@gmail.com
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) ...
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */
import { appConfig } from "@/app/utils/appConfig";
import LocalStorage from "@/app/utils/LocalStorage";
import axios, { InternalAxiosRequestConfig } from "axios";

const createInstance = (
  baseUrl: string,
  middleware: (
    requestConfig: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig[]
) => {
  const options = {
    baseURL: baseUrl,
    headers: {
      // "X-Requested-With": "XMLHttpRequest",
      "Content-Type": "application/json",
    },
    // paramsSerializer: {
    //   serializer: (params) => {
    //     return queryString.stringify(params);
    //   }
    // },
  };

  const instance = axios.create(options);

  instance.interceptors.request.use(
    async (requestConfig: InternalAxiosRequestConfig) => {
      await Promise.all(middleware(requestConfig));
      return requestConfig;
    },
    (requestError) => {
      return Promise.reject(requestError);
    }
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    (response) => {
      const { data,status } = response;
      if(status === 401){
        LocalStorage.remove(appConfig.tokenName)
        // hash code
        window.location.reload();
      }
      if (data.errors) {
        // hideLoadingPage()
        return Promise.reject(data);
      }
      if (data.error_msg) {
        // hideLoadingPage()
        return Promise.reject(data);
      }
      if (data?.data) {
        return data?.data;
      }
      return data;
    },
    (error) => {
      // hideLoadingPage()
      return Promise.reject(error);
    }
  );

  return instance;
};

export default createInstance;
