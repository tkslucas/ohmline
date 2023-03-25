import { useContext } from "react";
import BoolsContext from "./BoolsContext";
import Line, { LineProps } from "./Line";

interface AdjustedLineProps {
    index: number;
    lines: Array<LineProps>;
}

const AdjustedLine = ({ index, lines }: AdjustedLineProps) => {
    const context = useContext(BoolsContext);

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

    return <Line origin={origin} target={target} linestyle={linestyle}></Line>;
};

export default AdjustedLine;
