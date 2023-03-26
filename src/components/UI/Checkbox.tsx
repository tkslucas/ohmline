import "bootstrap/dist/css/bootstrap.css";
import { useContext, useState } from "react";
import GlobalContext from "../Contexts/GlobalContext";

interface CheckboxProps {
    text: string;
    keyObj: string;
}
const Checkbox = ({ text, keyObj }: CheckboxProps) => {
    const [isChecked, setisChecked] = useState(false);
    const context = useContext(GlobalContext);

    const onChange = () => {
        const value = !isChecked;
        setisChecked(value);
        context?.update1State(keyObj, value);
    };

    return (
        <div className="form-check form-switch" onChange={onChange}>
            <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
            />
            <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
            >
                {text}
            </label>
        </div>
    );
};

export default Checkbox;
