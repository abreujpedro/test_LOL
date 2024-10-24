import axios from "axios";
import * as env from "../../config/env";

const baseURL = "http://localhost:3000";

export const api = axios.create({ baseURL });
