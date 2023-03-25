import { createContext, useState, FC, ReactNode } from "react";

export interface IBools {
    perpendicular: boolean;
    thick: boolean;
    grid: boolean;
}

export const default_bools = {
    perpendicular: false,
    thick: false,
    grid: false,
};

export interface IBoolsContext {
    state: IBools;
    update1State: (key: string, newstate: boolean) => void;
}

const BoolsContext = createContext<IBoolsContext | null>(null);
export default BoolsContext;
