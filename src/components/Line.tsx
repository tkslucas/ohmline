import { Graphics } from "@pixi/react";
import { Graphics as GraphicsType } from "pixi.js";
import { useCallback } from "react";
interface Props {
    origin: { x: number; y: number };
    target: { x: number; y: number };
    linestyle?: {
        width?: number;
        color?: number;
        alpha?: number;
        native?: boolean;
    };
}

const default_linestyle = { width: 8, color: 0, alpha: 1, native: false };

const Line = ({ origin, target, linestyle = default_linestyle }: Props) => {
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
