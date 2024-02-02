import { ChangeEvent, ReactNode } from "react";

export type TEvent = ChangeEvent<HTMLInputElement>

//React specific
export type TRouteItem = {
    path: string;
    element: ReactNode;
  };

  export type TPathItem = {
    name: string;
    path?: string;
    element?: ReactNode;
    children?: TPathItem[];
  };
  