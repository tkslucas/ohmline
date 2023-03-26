import { useState, FC, ReactNode } from "react";
import GlobalContext, { default_state, IBools } from "./GlobalContext";

interface Props {
    children: ReactNode;
}

const GlobalContextProvider: FC<Props> = ({ children }) => {
    const [state, setState] = useState(default_state);

    const update1State = (key: string, newstate: boolean) => {
        let state2 = state;
        state2[key as keyof IBools] = newstate;
        setState(state2);
    };

    return (
        <GlobalContext.Provider value={{ state, update1State }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;
