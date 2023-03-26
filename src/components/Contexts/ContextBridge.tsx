import { FC, ReactNode } from "react";

const ContextBridge: FC<{
    children: ReactNode;
    Context: React.Context<any>;
    render: Function;
}> = ({ children, Context, render }) => {
    return (
        <Context.Consumer>
            {(value) =>
                render(
                    <Context.Provider value={value}>
                        {children}
                    </Context.Provider>
                )
            }
        </Context.Consumer>
    );
};

export default ContextBridge;
