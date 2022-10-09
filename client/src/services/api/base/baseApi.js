import axios, { AxiosInstance } from "axios";

export class BaseAPI {
    baseUrl
    axiosInstance;

    constructor (baseUrl) {
        this.baseUrl = baseUrl
        this.axiosInstance = axios.create({})
    }

    get (url, params = undefined, headers= undefined) {
        return this.axiosInstance({
            method: 'GET',
            url: `${this.baseUrl}${url}`,
            params: params ? params : null,
            headers: headers ? headers : null
        })
    }

    post (url,   data = undefined, params = undefined, headers = undefined) {
        return this.axiosInstance({
            method: 'POST',
            url: `${this.baseUrl}${url}`,
            params: params ? params : null,
            headers: headers ? headers : null,
            data: data ? data: null
        })
    }

    put (url,  data = undefined, params = undefined, headers = undefined) {
        return this.axiosInstance({
            method: 'PUT',
            url: `${this.baseUrl}${url}`,
            params: params ? params : null,
            headers: headers ? headers : null,
            data: data ? data: null
        })
    }
}