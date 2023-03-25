import { useState, FC, ReactNode } from "react";
import BoolsContext, { IBools } from "./BoolsContext";

interface Props {
    children: ReactNode;
}

const BoolsContextProvider: FC<Props> = ({ children }) => {
    const [state, setState] = useState({
        perpendicular: false,
    });

    const update1State = (key: string, newstate: boolean) => {
        let state2 = state;
        state2[key as keyof IBools] = newstate;
        setState(state2);
    };

    return (
        <BoolsContext.Provider value={{ state, update1State }}>
            {children}
        </BoolsContext.Provider>
    );
};

export default BoolsContextProvider;
