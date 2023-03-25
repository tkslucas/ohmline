import React from "react";
import Line from "./Line";
import { MouseStatus } from "./useMouseStatus";

interface Props {
    mouseStatus: MouseStatus;
    origin: { x: number; y: number };
}

const Canvas = ({ mouseStatus, origin }: Props) => {
    const { mousePosition, clicked } = mouseStatus;
    return (
        <>
            <Line
                origin={{ x: origin.x, y: origin.y }}
                target={{ x: mousePosition.x, y: mousePosition.y }}
                linestyle={{ width: 12, color: 0xe8eb34 }}
            />
            <Line
                origin={{ x: origin.x, y: origin.y }}
                target={{ x: mousePosition.x, y: mousePosition.y }}
                linestyle={{ width: 5, color: 0 }}
            />
        </>
    );
};

export default Canvas;
