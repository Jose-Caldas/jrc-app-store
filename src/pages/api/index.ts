import axios from "axios";
import { parseCookies } from "nookies";

const cookies = parseCookies();

export const api = axios.create({
  baseURL: "https://e-commerce-b4.herokuapp.com",
  headers: {
    Authorization: cookies["appstore.token"],
  },
});
