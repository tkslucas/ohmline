import "bootstrap/dist/css/bootstrap.css";

interface ButtonProps {
    text: string;
    onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
    return (
        <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
