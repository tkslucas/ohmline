import "./App.css";
import { Stage } from "@pixi/react";
import Background from "./components/Background";

function App() {
    const stage_options = {
        width: 640,
        height: 480,
        options: {
            resolution: window.devicePixelRatio || 1,
            autoDensity: true,
            backgroundColor: 0x6495ed,
            antialias: true,
        },
    };

    return (
        <Stage
            width={stage_options.width}
            height={stage_options.height}
            options={stage_options.options}
        >
            <Background></Background>
        </Stage>
    );
}

export default App;
