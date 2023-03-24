import { Sprite, useTick } from "@pixi/react";
import { useState } from "react";
import spriteimg from "../assets/sprite.png";

let i = 0;

const sprite_options = {
    image: spriteimg,
    x: 320,
    y: 240,
    anchor: { x: 0.5, y: 0.5 },
    scale: { x: 0.2, y: 0.2 },
    rotation: 0,
};
const Northwestern = () => {
    const [rotation, setRotation] = useState(0);
    useTick((delta) => {
        i += 0.05 * delta;
        setRotation((Math.sin(i) * Math.PI) / 4);
        sprite_options.rotation = rotation;
    });
    return <Sprite {...sprite_options}></Sprite>;
};

export default Northwestern;
