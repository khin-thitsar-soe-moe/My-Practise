import { DefaultAxios } from "./axioConfig";

export class ApiService {
    static post = (url, data, config = {}) => DefaultAxios.post(url, data, config);

    static get = (url, config = {}) => DefaultAxios.get(url, config);

    static put = (url, data, config = {}) => DefaultAxios.put(url, data, config);

    static delete = (url, config = {}) => DefaultAxios.delete(url, config);
}