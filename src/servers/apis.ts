import {getUrl, type ResponseBodyType} from "./base.api"
import Cookies from 'js-cookie';

export const queryUserInfo = async <T extends any>(): Promise<ResponseBodyType<T>> => {
    const url = getUrl("/users");
    const response = await fetch(url, {method:"POST", headers: {'token': `Bearer ${Cookies.get('token')}`,}});
    const data = await response.json();
    if (response.ok) {
        return {
          result: data,
          code: 200,
          message: 'Success'
        };
      } else {
        return {
          result: data,
          code: response.status,
          message: response.statusText
        };
      }
}