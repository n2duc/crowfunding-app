import { useDropdown } from "./dropdown-context";
import PropTypes from "prop-types";

const Option = (props) => {
    const { onClick } = props;
    const { setShow } = useDropdown();
    const handleClick = () => {
        onClick && onClick();
        setShow(false);
    };
    return (
        <div
            className="py-4 px-5 cursor-pointer flex items-center justify-between hover:text-primary transition-all text-sm select-none"
            onClick={handleClick}
        >
            {props.children}
        </div>
    );
};

Option.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
}

export default Option;
