/* eslint-disable */
import axios from 'axios'

export default class RestUtils {
  public static get(url: string, params?: any) : Promise<any> {
    return axios.get(url, params).then((resp) => resp.data)
  }

  public static post(url: string, params: any) : Promise<any> {
    return axios.post(url, params).then((resp) => resp.data)
  }
}