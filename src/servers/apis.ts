import {getUrl, type ResponseBodyType} from "./base.api"
import Cookies from 'js-cookie';

export const queryUserInfo = async <T extends any>(): Promise<ResponseBodyType<T>> => {
    const url = getUrl("/users");
    const response = await fetch(url, {method:"POST", headers: {'token': `Bearer ${Cookies.get('token')}`,}});
    return response.json();
}

export const queryAllCompany = async <T extends any>(): Promise<ResponseBodyType<T>> => {
  const url = getUrl("/company/all");
  const response = await fetch(url);
  return response.json();
}

export const queryServiceByID = async <T extends any>(id: string): Promise<ResponseBodyType<T>> => {
  const url = getUrl("/services/service") + `/${id}`;
  const response = await fetch(url);
  return response.json();
}

export const queryAllService = async <T extends any>(): Promise<ResponseBodyType<T>> => {
  const url = getUrl("/services/public");
  const response = await fetch(url);
  return response.json();
}