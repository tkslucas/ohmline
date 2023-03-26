import { LineProps } from "../Geometry/Line";
import Lines from "../Geometry/Lines";

interface CanvasProps {
    lines: Array<LineProps>;
}
[];
const Canvas = ({ lines }: CanvasProps) => {
    return (
        <>
            <Lines lines={lines}></Lines>
        </>
    );
};

export default Canvas;
