import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const defaultConfig = {
  timeout: 5000,
  baseURL: 'https://service-rbji0bev-1256505457.cd.apigw.tencentcs.com/release'
}

class Http {
  constructor() {
    this.httpInterceptorsRequest()
    this.httpInterceptorsResponse()
  }

  private static axiosInstance = axios.create(defaultConfig)

  // 请求拦截
  private httpInterceptorsRequest() {
    Http.axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
      return config
    }, (error) => {
      return Promise.reject(error)
    })
  }

  // 响应拦截
  private httpInterceptorsResponse() {
    Http.axiosInstance.interceptors.response.use((response: AxiosResponse) => {
      return response
    }, error => {
      return Promise.reject(error)
    })
  }

  // 封装请求
  // 封装请求
  // get
  public httpGet<T>(url: string, params: AxiosRequestConfig): Promise<T> {
    return Http.axiosInstance.get(url, params).then(res => {
      return res.data
    }).catch(err => {
      return Promise.reject(err)
    })
  }

  // post
  public httpPost<T>(url: string, params: AxiosRequestConfig): Promise<T> {
    return Http.axiosInstance.post(url, params).then(res => {
      return res.data
    }).catch(err => {
      return Promise.reject(err)
    })
  }
}

export const http = new Http()
