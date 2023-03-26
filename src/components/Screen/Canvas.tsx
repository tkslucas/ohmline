import { LineProps } from "../Geometry/Line";
import Lines from "../Geometry/Lines";
import Dots from "../Geometry/Dots";
import { useApp, useTick } from "@pixi/react";
import update from "../Utils/OrganizeParticles";
import Dot, { DotProps } from "../Geometry/Dot";
interface CanvasProps {
    elements: [Array<LineProps>, Array<DotProps>];
}

const Canvas = ({ elements }: CanvasProps) => {
    const app = useApp();
    const bounds = app.view.getBoundingClientRect();
    // useTick((delta) => {
    //     console.log("ha");
    //     let dots = elements[1];
    //     const particles = dots.map((dot) => {
    //         return { m: 1, cm: dot.target };
    //     });
    //     let newpos: Array<{ x: number; y: number }>;
    //     newpos = update(particles, bounds);
    //     dots = dots.map((dot, index) => {
    //         dot.target = newpos[index];
    //         return dot;
    //     });
    // });
    return (
        <>
            <Lines lines={elements[0]}></Lines>
            <Dots dots={elements[1]}></Dots>
        </>
    );
};

export default Canvas;
