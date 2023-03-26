import { DotProps } from "../Geometry/Dot";
import { LineProps } from "../Geometry/Line";
import Lines from "../Geometry/Lines";
import Dots from "../Geometry/Dots";
interface CanvasProps {
    elements: [Array<LineProps>, Array<DotProps>];
}

const Canvas = ({ elements }: CanvasProps) => {
    return (
        <>
            <Lines lines={elements[0]}></Lines>
            <Dots dots={elements[1]}></Dots>
        </>
    );
};

export default Canvas;
