import PropTypes from "prop-types";

const CampDesc = ({ children, className = "text-xs mb-[15px]" }) => {
    return (
        <p className={`text-text3 font-normal ${className}`}>
            {children}
        </p>
    );
};
CampDesc.propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
}
export default CampDesc;
