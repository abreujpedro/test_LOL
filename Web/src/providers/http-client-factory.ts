import { HttpClient } from "../services/api/http-client";

import * as env from "../config/env";

// export const headers: Record<string, string> = {};

const httpClient = new HttpClient(env.REACT_API_URL);

// httpClient.addDefaultHeaders(headers);

export { httpClient };
