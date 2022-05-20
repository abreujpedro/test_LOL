import { AxiosError } from "axios";

import { HttpClientResponse } from "~/services/api/responses/http-client-response";

export const responseParser = (res: HttpClientResponse): any => {
  return res.getRawData();
};

export const errorParser = (error: AxiosError): never => {
  throw new Error(error.message); //Arrumar esse cara aqui, p ele virar um tsx mais p frente
};
