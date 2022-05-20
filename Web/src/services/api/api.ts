import axios from "axios";

const baseURL = "Undefined"; // definir URL base da API

export const api = axios.create({ baseURL });
