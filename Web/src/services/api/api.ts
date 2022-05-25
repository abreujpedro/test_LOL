import axios from "axios";
import * as env from "../../config/env";

const baseURL = env.REACT_API_URL;

export const api = axios.create({ baseURL });
