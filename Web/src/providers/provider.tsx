import React, { ReactElement, ReactNode } from "react";
import { ApplicationProvider } from "./application-provider";
export const ContextProviders = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => <ApplicationProvider>{children}</ApplicationProvider>;
