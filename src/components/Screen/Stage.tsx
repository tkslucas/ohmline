import { Stage as PixiStage } from "@pixi/react";
import { FC } from "react";
import GlobalContext from "../Contexts/GlobalContext";
import ContextBridge from "../Contexts/ContextBridge";

const stage_options = {
    width: 1920,
    height: 1080,
    options: {
        resolution: window.devicePixelRatio || 1,
        autoDensity: true,
        backgroundColor: 0x6495ed,
        antialias: true,
    },
};

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
