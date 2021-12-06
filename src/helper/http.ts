import axios, { AxiosInstance } from "axios";
// https://api.coindesk.com/v1/bpi/currentprice.json
const apiClient: AxiosInstance = axios.create({
  baseURL: "https://crudcrud.com/api/fd38f044c4fe479fb5afbfe0f91eb28c",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;