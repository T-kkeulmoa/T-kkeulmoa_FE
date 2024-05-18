import axios from "axios";
//import axios, { AxiosResponse } from "axios";

export const API = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "69420",
  },
});

//Auth
/* export const setAccess = (token: string): unknown =>
  (API.defaults.headers["Authorization"] = token);
 */

/* export const resetAccess = (): unknown =>
  delete API.defaults.headers["Authorization"];
export const getAccess = (): string =>
  `${API.defaults.headers["Authorization"]}`;

//Refresh
const storageRefreshKey = "ZOO_JWT_REFRESH";

export const storeRefresh = (token: string): void => {
  localStorage.setItem(storageRefreshKey, token);
};
export const removeRefresh = (): void => {
  localStorage.removeItem(storageRefreshKey);
};
export const getRefresh = (): string | null => {
  return localStorage.getItem(storageRefreshKey);
}; */
