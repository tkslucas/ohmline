import "./App.css";
import BoolsContextProvider from "./components/BoolsContextProvider";
import Stage from "./components/Stage";
import Background from "./components/Background";
import Menu from "./components/Menu";

function App() {
    return (
        <div className="app">
            <h1 className="text-center"> Ohmline</h1>
            <BoolsContextProvider>
                <div>
                    <Stage>
                        <Background></Background>
                    </Stage>
                </div>
                <Menu></Menu>
            </BoolsContextProvider>
        </div>
    );
}

export default App;
