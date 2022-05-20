import React, { ReactElement, ReactNode } from "react";
import { ApplicationContext } from "../contexts/application-context";
import { httpClient } from "./http-client-factory";
import * as env from "../config/env";

export const ApplicationProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  return (
    <ApplicationContext.Provider
      value={{
        httpClient,
        env,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};
