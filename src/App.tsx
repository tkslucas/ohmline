import "./App.css";
import GlobalContextProvider from "./components/Contexts/GlobalContextProvider";
import Stage from "./components/Screen/Stage";
import Background from "./components/Screen/Background";
import Menu from "./components/UI/Menu";

function App() {
    return (
        <div className="app">
            <h1 className="text-center"> Ohmline</h1>
            <GlobalContextProvider>
                <div>
                    <Stage>
                        <Background></Background>
                    </Stage>
                </div>
                <Menu></Menu>
            </GlobalContextProvider>
        </div>
    );
}

export default App;
