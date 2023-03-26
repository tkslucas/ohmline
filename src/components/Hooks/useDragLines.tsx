import { useContext, useState } from "react";
import useMouseStatus from "./useMouseStatus";
import { FederatedPointerEvent, LineStyle } from "pixi.js";
import { LineProps } from "../Geometry/Line";
import { useApp } from "@pixi/react";

let lines: Array<LineProps> = [];

export const clear = () => {
    lines = [];
};

const useDragLines = (linestyle: LineStyle, dots: boolean) => {
    const app = useApp();
    const mouseStatus = useMouseStatus();
    const [dragging, setDragging] = useState(false);
    const onDownLines = (event: FederatedPointerEvent) => {
        const bounds = app.view.getBoundingClientRect();
        if (!dots) {
            setDragging(true);
            lines.push({
                origin: {
                    x: event.clientX - bounds.x,
                    y: event.clientY - bounds.y,
                },
                target: {
                    x: mouseStatus.mousePosition.x,
                    y: mouseStatus.mousePosition.y,
                },
                linestyle: linestyle,
            });
        }
    };
    const onUpLines = (event: FederatedPointerEvent) => {
        setDragging(false);
    };

    const onMoveLines = (event: FederatedPointerEvent) => {
        if (dragging) {
            lines.slice(-1)[0].target = {
                x: mouseStatus.mousePosition.x,
                y: mouseStatus.mousePosition.y,
            };
        }
    };
    return { lines, onDownLines, onUpLines, onMoveLines };
};

export default useDragLines;
