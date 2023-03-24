import { Container, Stage, withFilters } from "@pixi/react";
import { useState } from "react";
import Northwestern from "./Northwestern";
import {
    BlurFilter,
    FederatedEventHandler,
    FederatedPointerEvent,
} from "pixi.js";
const Filters = withFilters(Container, {
    blur: BlurFilter,
});

interface Props {
    xcon: number;
    ycon: number;
}

const Contains = ({ xcon, ycon }: Props) => {
    const [blur, setBlur] = useState(0);

    const onClick = (e: FederatedPointerEvent) => {
        console.log("Clicked");
        console.log(e);
        setBlur(blur + 1);
        //console.log(blur);
    };
    return (
        <Container
            position={{ x: xcon, y: ycon }}
            interactive={true}
            onpointerdown={onClick}
        >
            <Filters blur={{ blur: blur }}>
                <Northwestern />
            </Filters>
        </Container>
    );
};

export default Contains;
