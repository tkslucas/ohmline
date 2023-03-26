import { createContext, useState, FC, ReactNode } from "react";

export interface IBools {
    perpendicular: boolean;
    thick: boolean;
    grid: boolean;
}

export const default_state = {
    perpendicular: false,
    thick: false,
    grid: false,
};

export interface IGlobalContext {
    state: IBools;
    update1State: (key: string, newstate: boolean) => void;
}

const GlobalContext = createContext<IGlobalContext | null>(null);
export default GlobalContext;
