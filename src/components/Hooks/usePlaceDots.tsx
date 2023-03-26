import { useContext, useState } from "react";
import useMouseStatus from "./useMouseStatus";
import { FederatedPointerEvent, LineStyle } from "pixi.js";
import { DotProps } from "../Geometry/Dot";
import { useApp } from "@pixi/react";

let dots: Array<DotProps> = [];

export const clear = () => {
    dots = [];
};

const usePlaceDots = (dotstyle: number, drawdots: boolean) => {
    const app = useApp();
    const mouseStatus = useMouseStatus();
    const onDownDots = (event: FederatedPointerEvent) => {
        const bounds = app.view.getBoundingClientRect();
        if (dots) {
            console.log("Placed");
            dots.push({
                target: {
                    x: mouseStatus.mousePosition.x,
                    y: mouseStatus.mousePosition.y,
                },
                radius: 10,
                color: dotstyle,
            });
        }
    };
    const onUpDots = (event: FederatedPointerEvent) => {};

    const onMoveDots = (event: FederatedPointerEvent) => {};
    return { dots, onDownDots, onUpDots, onMoveDots };
};

export default usePlaceDots;
