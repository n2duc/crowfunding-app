import PropTypes from "prop-types";

const Heading = ({ children, className = "", number = null }) => {
    return (
        <h2 className={`text-lg font-semibold text-text1 mb-5 ${className} dark:text-white`}>
            {children}
            {number && <span className="text-secondary dark:text-white">{` (${number})`}</span>}
        </h2>
    );
};

Heading.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    number: PropTypes.number,
};

export default Heading;
