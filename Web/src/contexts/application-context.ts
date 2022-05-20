import React from "react";
import { HttpClient } from "../services/api/http-client";

export type ApplicationContextType = {
  httpClient: HttpClient;
  env: Record<string, string | number | boolean>;
};

export const ApplicationContext = React.createContext<ApplicationContextType>({
  httpClient: new HttpClient("http://google.com.br"),
  env: {},
});

export const useApplicationFromContext = (): ApplicationContextType =>
  React.useContext(ApplicationContext);
