import { useApp, Container, Sprite } from "@pixi/react";
import { useState } from "react";
import useMouseStatus from "./useMouseStatus";
import { FederatedPointerEvent, Texture } from "pixi.js";
import Canvas from "./Canvas";

//interactive: true,
//onpointerdown: onClick,

const Background = () => {
    const mouseStatus = useMouseStatus();
    const [origin, setOrigin] = useState({ x: 0, y: 0 });
    const onClick = (event: FederatedPointerEvent) => {
        //console.log(event);
        setOrigin({ x: event.clientX, y: event.clientY });
    };
    const app = useApp();

    return (
        <Container eventMode="static" onpointerdown={onClick}>
            <Canvas mouseStatus={mouseStatus} origin={origin}></Canvas>
            <Sprite
                texture={Texture.EMPTY}
                width={app.screen.width}
                height={app.screen.height}
            ></Sprite>
        </Container>
    );
};

export default Background;
