import { useApp } from "@pixi/react";
import { useEffect, useState } from "react";

interface MousePosition {
    x: number;
    y: number;
}

export interface MouseStatus {
    mousePosition: MousePosition;
    clicked: boolean;
}

const useMouseStatus = (): MouseStatus => {
    const app = useApp();
    const [status, setStatus] = useState<MouseStatus>({
        mousePosition: { x: 0, y: 0 },
        clicked: false,
    });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const bounds = app.view.getBoundingClientRect();
            setStatus((prevStatus) => ({
                ...prevStatus,
                mousePosition: {
                    x: event.clientX - bounds.x,
                    y: event.clientY - bounds.y,
                },
            }));
        };

        const handleMouseClick = (event: MouseEvent) => {
            setStatus((prevStatus) => ({
                ...prevStatus,
                clicked: true,
            }));
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("click", handleMouseClick);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("click", handleMouseClick);
        };
    }, []);

    return status;
};

export default useMouseStatus;
