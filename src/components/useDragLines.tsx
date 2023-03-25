import { useContext, useState } from "react";
import useMouseStatus from "./useMouseStatus";
import { FederatedPointerEvent, LineStyle } from "pixi.js";
import { LineProps } from "./Line";

const lines: Array<LineProps> = [];
const useDragLines = (linestyle: LineStyle) => {
    const mouseStatus = useMouseStatus();
    const [dragging, setDragging] = useState(false);
    const onDown = (event: FederatedPointerEvent) => {
        setDragging(true);
        lines.push({
            origin: { x: event.clientX, y: event.clientY },
            target: {
                x: mouseStatus.mousePosition.x,
                y: mouseStatus.mousePosition.y,
            },
            linestyle: linestyle,
        });
    };
    const onUp = (event: FederatedPointerEvent) => {
        setDragging(false);
    };

    const onMove = (event: FederatedPointerEvent) => {
        if (dragging) {
            lines.slice(-1)[0].target = {
                x: mouseStatus.mousePosition.x,
                y: mouseStatus.mousePosition.y,
            };
        }
    };
    return { lines, onDown, onUp, onMove };
};

export default useDragLines;
