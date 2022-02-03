const apiURL = "http://localhost:8000/api";

const axios = require("axios").create({baseURL: apiURL, timeout: 0, headers: {}});

/* HTTP METHODS */

export function httpGet(url, params = {}, headers={}) {
    return axios.get(url, {headers, params});
}

export function httpPost(url, data, headers={}) {
    return axios.post(url, data, {headers});
}

export function httpPut(url, data, headers={}) {
    return axios.put(url, data, {headers});
}

export function httpPatch(url, data, headers={}) {
    return axios.patch(url, data, {headers});
}

export function httpDelete(url, headers={}) {
    return axios.delete(url, {headers});
}

/* END HTTP METHODS */
