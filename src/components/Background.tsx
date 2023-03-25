import { useApp, Container, Sprite, useTick } from "@pixi/react";
import { Texture, LineStyle } from "pixi.js";
import Canvas from "./Canvas";
import useDragLines from "./useDragLines";

const linestyle = new LineStyle();

linestyle.color = 0;
linestyle.width = 12;
linestyle.alpha = 1;
linestyle.visible = true;

const Background = () => {
    const app = useApp();
    const { lines, onDown, onUp, onMove } = useDragLines(linestyle);
    return (
        <Container
            eventMode="static"
            onpointerdown={onDown}
            onpointerup={onUp}
            onpointermove={onMove}
        >
            <Canvas lines={lines}></Canvas>
            <Sprite
                texture={Texture.EMPTY}
                width={app.screen.width}
                height={app.screen.height}
            ></Sprite>
        </Container>
    );
};

export default Background;
