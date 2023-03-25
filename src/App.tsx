import "./App.css";
import Checkbox from "./components/Checkbox";
import BoolsContextProvider from "./components/BoolsContextProvider";
import Stage from "./components/Stage";
import Background from "./components/Background";

function App() {
    return (
        <BoolsContextProvider>
            <div>
                <Stage>
                    <Background></Background>
                </Stage>
                <Checkbox
                    text="Perpendicular Only"
                    keyObj="perpendicular"
                ></Checkbox>
            </div>
        </BoolsContextProvider>
    );
}

export default App;
