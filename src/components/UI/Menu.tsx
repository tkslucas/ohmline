import Checkbox from "./Checkbox";
import Button from "./Button";
import { clear } from "../Hooks/useDragLines";
const Menu = () => {
    return (
        <div className="menu">
            <div className="checkbox">
                <Checkbox
                    text="Perpendicular Only"
                    keyObj="perpendicular"
                ></Checkbox>
                <Checkbox text="Think Lines" keyObj="thick"></Checkbox>
                <Checkbox text="Snap to Grid" keyObj="grid"></Checkbox>
            </div>
            <Button text="Clear" onClick={clear}></Button>
        </div>
    );
};

export default Menu;
