import { Link } from "react-router-dom";
import { IconFolder } from "../../../components/icons";
import PropTypes from "prop-types";

const CampCate = ({ text = "", size = 2, className = "text-xs mb-[15px]" }) => {
    return (
        <Link
            to="/"
            className={`flex items-center gap-x-[10px] text-text3 font-medium ${className}`}
        >
            <IconFolder size={size}></IconFolder>
            <span>{text}</span>
        </Link>
    );
};

CampCate.propTypes = {
    text: PropTypes.string,
    size: PropTypes.number,
    className: PropTypes.string,
}

export default CampCate;
