const apiURL = "http://localhost:8000/api";

const axios = require("axios").create({baseURL: apiURL, timeout: 0, headers: {}});

const buildHeaders = ({token}) => {
    if (token) {
        return {headers: {"Authorization": `token ${token}`}}
    } else {
        return {}
    };
};

/* HTTP METHODS */

export function httpGet(url, params = {}, headers={}) {
    const constructedHeaders = buildHeaders(headers)
    return axios.get(url, constructedHeaders);
};

export function httpPost(url, data, headers={}) {
    const constructedHeaders = buildHeaders(headers)
    return axios.post(url, data, {constructedHeaders});
};

export function httpPut(url, data, headers={}) {
    const constructedHeaders = buildHeaders(headers)
    return axios.put(url, data, {constructedHeaders});
};

export function httpPatch(url, data, headers={}) {
    const constructedHeaders = buildHeaders(headers)
    return axios.patch(url, data, {constructedHeaders});
};

export function httpDelete(url, headers={}) {
    const constructedHeaders = buildHeaders(headers)
    return axios.delete(url, {constructedHeaders});
};

/* END HTTP METHODS */
