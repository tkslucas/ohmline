import { Container } from "@pixi/react";
import { LineProps } from "./Line";
import AdjustedLine from "./AdjustedLine";
interface LinesProps {
    lines: Array<LineProps>;
}

const Lines = ({ lines }: LinesProps) => {
    return (
        <Container>
            {lines.map((line, index) => (
                <AdjustedLine key={index} lines={lines} index={index} />
            ))}
        </Container>
    );
};

export default Lines;
