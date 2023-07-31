import PropTypes from "prop-types";

const CampTitle = ({ children, className = "text-base font-semibold mb-[5px]" }) => {
    return (
        <h3 className={`text-text1 ${className}`}>
            {children}
        </h3>
    );
};
CampTitle.propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
}
export default CampTitle;
