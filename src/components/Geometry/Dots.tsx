import { Container } from "@pixi/react";
import Dot, { DotProps } from "./Dot";
interface DotsProps {
    dots: Array<DotProps>;
}

const Dots = ({ dots }: DotsProps) => {
    return (
        <Container>
            {dots.map((dot, index) => (
                <Dot
                    key={index}
                    target={dot.target}
                    radius={dot.radius}
                    color={dot.color}
                />
            ))}
        </Container>
    );
};

export default Dots;
