import { createContext } from "react";

export const appCtx = createContext("app provider");
export const AppProvider = appCtx.Provider;

export const crpCtx = createContext("crp provider");
export const CrpProvider = crpCtx.Provider;
