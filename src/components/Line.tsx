import { Graphics } from "@pixi/react";
import { Graphics as GraphicsType } from "pixi.js";
import { useCallback } from "react";
import { LineStyle } from "pixi.js";
export interface LineProps {
    origin: { x: number; y: number };
    target: { x: number; y: number };
    linestyle?: LineStyle;
}

const Line = ({ origin, target, linestyle }: LineProps) => {
    const draw = useCallback(
        (g: GraphicsType) => {
            g.clear();
            g.lineStyle(linestyle);
            g.moveTo(origin.x, origin.y);
            g.lineTo(target.x, target.y);
        },
        [origin, target]
    );

    return <Graphics draw={draw}></Graphics>;
};

export default Line;
