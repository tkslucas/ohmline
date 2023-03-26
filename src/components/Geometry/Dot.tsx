import { Graphics } from "@pixi/react";
import { Graphics as GraphicsType } from "pixi.js";
import { useCallback } from "react";
export interface DotProps {
    target: { x: number; y: number };
    radius: number;
    color: number;
}

const Dot = ({ target, radius, color }: DotProps) => {
    const draw = useCallback(
        (g: GraphicsType) => {
            g.clear();
            g.beginFill(color, 1);
            g.drawCircle(target.x, target.y, radius);
            g.endFill();
        },
        [target, radius]
    );

    return <Graphics draw={draw}></Graphics>;
};

export default Dot;
