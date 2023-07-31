import PropTypes from "prop-types";
const Button = ({
    type,
    children,
    className = "",
    isLoading = false,
    ...rest
}) => {
    const child = isLoading ? (
        <div className="w-7 h-7 rounded-full border-4 border-white border-t-transparent animate-spin"></div>
    ) : (
        children
    );
    return (
        <button
            className={`flex items-center justify-center p-3 text-base font-semibold min-h-[54px] text-white rounded-[10px] ${isLoading ? "opacity-50 pointer-events-none" : ""} ${className}`}
            type={type}
            {...rest}
        >
            {child}
        </button>
    );
};
Button.propTypes = {
    type: PropTypes.string.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    isLoading: PropTypes.bool,
};
export default Button;
