import { Stage as PixiStage } from "@pixi/react";
import { FC } from "react";
import GlobalContext from "../Contexts/GlobalContext";
import ContextBridge from "../Contexts/ContextBridge";
import { stage_options } from "../DefaultOptions";

export const Stage: FC<{ children: JSX.Element }> = ({
    children,
    ...props
}) => {
    return (
        <ContextBridge
            Context={GlobalContext}
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
