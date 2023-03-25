import { LineProps } from "./Line";
import Lines from "./Lines";
import { MouseStatus } from "./useMouseStatus";

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
