import { Stage as PixiStage } from "@pixi/react";
import Background from "./Background";
import { FC, ReactNode } from "react";
import BoolsContext from "./BoolsContext";

// the context bridge:
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

const stage_options = {
    width: 1280,
    height: 720,
    options: {
        resolution: window.devicePixelRatio || 1,
        autoDensity: true,
        backgroundColor: 0x6495ed,
        antialias: true,
    },
};

// your Stage:
export const Stage: FC<{ children: JSX.Element }> = ({
    children,
    ...props
}) => {
    return (
        <ContextBridge
            Context={BoolsContext}
            render={(children: JSX.Element) => (
                <PixiStage
                    width={stage_options.width}
                    height={stage_options.height}
                    options={stage_options.options}
                >
                    {children}
                </PixiStage>
            )}
        >
            {children}
        </ContextBridge>
    );
};

export default Stage;
