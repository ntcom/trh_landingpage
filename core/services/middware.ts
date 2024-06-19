/*
 * Created Date: 22-04-2023, 9:45 pm
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

import LocalStorage from "@/app/utils/LocalStorage";
import { appConfig } from "@/app/utils/appConfig";
import { InternalAxiosRequestConfig } from "axios";

const excludeApi: string[] = ["auth/token"];

const withAuthToken = (requestConfig: InternalAxiosRequestConfig) => {
  const { url } = requestConfig;

  if (url && !excludeApi.includes(url)) {
    console.log("🚀 ~ url:", url);
    const mockToken = "access_token_ba0e8c81183207cccd0d63c59e3afdb4292a109d";
    const authToken = LocalStorage.get(appConfig.tokenName) || mockToken;
    if (authToken) {
      requestConfig.headers["Authorization"] = authToken;
      // requestConfig.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`;
      return requestConfig;
    }

    return requestConfig;
  }

  return requestConfig;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  auth: withAuthToken,
};
