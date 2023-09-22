import axios from 'axios';
const apiClient = async(url,method,data)=>{
    const host = window.location.pathname
    const baseURL = `${host}:${process.env.SERVER_PORT || 5000}/`
    return await axios.request({
        method, // Required, HTTP method, a string, e.g. POST, GET
        url,
        data,
        baseURL,
        headers: { "Content-Type": "application/json" },
      });
}
export default apiClient;