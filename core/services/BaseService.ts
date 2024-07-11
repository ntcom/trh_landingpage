/*
 * Created Date: 23-07-2023, 15:45 pm
 * Author: Nguyễn Hữu Dương
 * Email: duonghd1803@gmail.com
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c)
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import middlewares from "./middware";
import createInstance from "./axios.config";
import { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import { appConfig } from "@/app/utils/appConfig";

interface ISearchParams {
  page_index: number;
  page_size: number;
}

abstract class BaseService {
  private _baseUrl = appConfig.url;

  private _primaryKey = "id";

  private _baseEndpoint = "";

  private _apllyMiddleware = {
    ...middlewares,
  };

  request;

  searchParams: ISearchParams = {
    page_index: 1,
    page_size: 10,
  };

  constructor() {
    this.request = createInstance(this._baseUrl, this.middleware);
  }

  protected set baseUrl(baseUrl) {
    this._baseUrl = baseUrl;
  }

  protected get baseUrl() {
    return this._baseUrl;
  }

  protected set baseEndPoint(baseEndpoint) {
    this._baseEndpoint = baseEndpoint;
  }

  protected get baseEndPoint() {
    return this._baseEndpoint;
  }

  protected set primaryKey(primaryKey) {
    this._primaryKey = primaryKey;
  }
  protected get primaryKey() {
    return this._primaryKey;
  }

  private middleware = (requestConfig: InternalAxiosRequestConfig) => {
    const arr = Object.values(this._apllyMiddleware).map((m) => {
      if (typeof m === "function") {
        return m(requestConfig);
      }
      return m;
    });
    return arr;
  };

  private getEndpoint(prefix = "", id?: string) {
    const hasId = id ? "/" + id : "";
    const endPoint = this._baseEndpoint + prefix + hasId;
    return endPoint;
  }

  // [GET]
  public get<T = any, R = T>(
    prefix?: string,
    config: AxiosRequestConfig = {}
  ): Promise<R> {
    const url = this.getEndpoint(prefix);
    return this.request.get<T, R>(url, config);
  }

  // [POST]
  public post<T = any, R = T>(
    data: any = {},
    prefix?: string,
    config: AxiosRequestConfig = {}
  ): Promise<R> {
    const url = this.getEndpoint(prefix);
    return this.request.post<T, R>(url, data, config);
  }

  // [DELETE]
  public delete<T = any, R = T>(
    id: string,
    prefix?: string,
    config: AxiosRequestConfig = {}
  ): Promise<R> {
    const url = this.getEndpoint(prefix, id);
    return this.request.delete<T, R>(url, config);
  }

  // [GET]
  public listWithParams<T = any, R = T>(
    query = {},
    prefix?: string,
    config: AxiosRequestConfig = {}
  ): Promise<R> {
    const url = this.getEndpoint(prefix);
    const params = { ...this.searchParams, ...query };
    const configs = { params, ...config };
    return this.request.get<T, R>(url, configs);
  }

  // [GET]
  public find<T = any, R = T>(
    id: string,
    prefix?: string,
    config: AxiosRequestConfig = {}
  ): Promise<R> {
    const url = this.getEndpoint(prefix, id);
    return this.request.get<T, R>(url, config);
  }

  // PUT or PATCH
  public update<T = any, R = T>(
    data: any = {},
    prefix?: string,
    config: AxiosRequestConfig = {}
  ): Promise<R> {
    const url = this.getEndpoint(prefix, data[this._primaryKey]);
    return this.request.put(url, data, config);
  }

  // update or post
  public save<T = any, R = T>(
    data: any = {},
    config: AxiosRequestConfig = {}
  ): Promise<R> {
    const PRIMARY_KEY = this._primaryKey;
    if (data.hasOwnProperty(PRIMARY_KEY) && data[PRIMARY_KEY]) {
      return this.update(data, "", config);
    }
    return this.post(data, "", config);
  }
 public setHeader(headers:any = {}) {
    this.request.interceptors.request.use(
      async (requestConfig) => {
        requestConfig.headers["Content-Type"] = headers;
        console.log('requestConfig:', requestConfig)
        return requestConfig;
      },
      (requestError) => {
        // console.log(requestError)
        return Promise.reject(requestError);
      }
    );
  }
  convertObjectToFormData(obj: Record<string, any>): FormData {
    const formData = new FormData();
  
    function appendToFormData(data: Record<string, any>, root: string = ''): void {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const value = data[key];
          const formKey = root ? `${root}[${key}]` : key;
  
          if (value instanceof File) {
            formData.append(formKey, value);
          } else if (Array.isArray(value)) {
            value.forEach(element => {
              const arrayKey = `${formKey}[]`;
              if (element instanceof File) {
                formData.append(arrayKey, element);
              } else {
                appendToFormData(element, arrayKey);
              }
            });
          } else if (typeof value === 'object' && value !== null) {
            appendToFormData(value, formKey);
          } else {
            formData.append(formKey, value);
          }
        }
      }
    }
  
    appendToFormData(obj);
    return formData;
  }
  // parseFormData(data: any) {
  //   const formData = new FormData();
  //   Object.entries(data).forEach(([key, value]) => {
  //     formData.append(key, value);
  //   });
  //   return formData;
  // }
}

export default BaseService;
