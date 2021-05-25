import axios from "axios";

export const api = axios.create({
  baseURL: "https://e-commerce-b4.herokuapp.com",
});
