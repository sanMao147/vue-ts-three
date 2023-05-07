import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
const service = axios.create()

// request interceptors
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // do something
    return config
  },
  (error: any) => {
    Promise.reject(error)
  }
)

// response interceptors
service.interceptors.response.use(
  async (response: AxiosResponse) => {
    // do something
  },
  (error: any) => {
    // do something
    return Promise.reject(error)
  }
)
export default service
