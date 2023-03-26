import { useApp, Container, Sprite, Text, useTick } from "@pixi/react";
import { Texture } from "pixi.js";
import Canvas from "./Canvas";
import useDragLines from "../Hooks/useDragLines";
import usePlaceDots from "../Hooks/usePlaceDots";
import { linestyle_options, color_options } from "../DefaultOptions";
import useMouseStatus from "../Hooks/useMouseStatus";
import { useContext } from "react";
import GlobalContext from "../Contexts/GlobalContext";
import { LineProps } from "../Geometry/Line";
import { DotProps } from "../Geometry/Dot";

const Background = () => {
    const app = useApp();
    const context = useContext(GlobalContext);
    const { lines, onDownLines, onUpLines, onMoveLines } = useDragLines(
        linestyle_options,
        context.state.dots
    );
    const { dots, onDownDots, onUpDots, onMoveDots } = usePlaceDots(
        color_options,
        context.state.dots
    );
    let elements: [Array<LineProps>, Array<DotProps>];
    let onDown;
    let onUp;
    let onMove;

    if (!context.state.dots) {
        elements = [lines, []];
        onDown = onDownLines;
        onUp = onUpLines;
        onMove = onMoveLines;
    } else {
        elements = [[], dots];
        onDown = onDownDots;
        onUp = onUpDots;
        onMove = onMoveDots;
    }

    const { mousePosition, clicked } = useMouseStatus();

    useTick((delta) => {
        //console.log(delta);
    });
    return (
        <Container
            eventMode="static"
            onpointerdown={onDown}
            onpointerup={onUp}
            onpointermove={onMove}
        >
            <Canvas elements={elements}></Canvas>

            <Sprite
                texture={Texture.EMPTY}
                width={app.screen.width}
                height={app.screen.height}
            ></Sprite>
            <Text
                text={
                    "(" +
                    Math.round(mousePosition.x).toString() +
                    ", " +
                    Math.round(mousePosition.y).toString() +
                    ")"
                }
                x={79}
                y={30}
                anchor={0.5}
            ></Text>
        </Container>
    );
};

export default Background;
