import { Stage } from "@pixi/react";
import Northwestern from "./Northwestern";

const stage_options = {
    width: 640,
    height: 480,
    options: {
        resolution: window.devicePixelRatio || 1,
        autoDensity: true,
        backgroundColor: 0x6495ed,
    },
};

const Test = () => {
    return (
        <Stage
            width={stage_options.width}
            height={stage_options.height}
            options={stage_options.options}
        >
            <Northwestern />
        </Stage>
    );
};

export default Test;
