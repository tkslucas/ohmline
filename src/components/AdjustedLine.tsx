import { LineStyle } from "pixi.js";
import { useContext } from "react";
import BoolsContext, { IBools, IBoolsContext } from "./BoolsContext";
import Line, { LineProps } from "./Line";

interface AdjustedLineProps {
    index: number;
    lines: Array<LineProps>;
}

const parseContext = (
    context: IBoolsContext | null,
    { index, lines }: AdjustedLineProps
) => {
    const [origin, target, linestyle] = [
        lines[index].origin,
        lines[index].target,
        lines[index].linestyle,
    ];
    if (context?.state.perpendicular) {
        if (Math.abs(target.x - origin.x) < Math.abs(target.y - origin.y)) {
            target.x = origin.x;
        } else {
            target.y = origin.y;
        }
    }
    if (context?.state.thick) {
        linestyle.width = 12;
    } else {
        linestyle.width = 6;
    }

    if (context?.state.grid) {
        origin.x = Math.round(origin.x / 25) * 25;
        origin.y = Math.round(origin.y / 25) * 25;
        target.x = Math.round(target.x / 25) * 25;
        target.y = Math.round(target.y / 25) * 25;
    }

    return { origin: origin, target: target, linestyle: linestyle };
};

const AdjustedLine = (props: AdjustedLineProps) => {
    const context = useContext(BoolsContext);
    const { origin, target, linestyle } = parseContext(context, props);

    return <Line origin={origin} target={target} linestyle={linestyle}></Line>;
};

export default AdjustedLine;
