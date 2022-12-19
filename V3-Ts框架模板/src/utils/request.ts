import axios, { AxiosRequestConfig } from 'axios';
declare type JSONS = string | number;
/**
 * 
 * @param {AxiosRequestOption} AxiosRequestConfig 
 * @returns Promise<AxiosRequestOption>
 */
export default async function request(config: AxiosRequestConfig) {
    return axios(config);
}

/**
 * @Proxy request
 */
 axios.interceptors.request.use(function(config){
   // try{window.$Loader();}catch(e){console.log(e)}
   return config;
},function (error) {
   // try{window.$closeLoader();}catch(e){console.log(e)}
   // 对请求错误做些什么
   return Promise.reject(error);
});
/**
* @Proxy response
*/
axios.interceptors.response.use(function(response){
   // try{window.$closeLoader();}catch(e){console.log(e)}
   return response;
}, function (error) {
   // try{window.$closeLoader();}catch(e){console.log(e)}
   // 对响应错误做点什么
   return Promise.reject(error);
});