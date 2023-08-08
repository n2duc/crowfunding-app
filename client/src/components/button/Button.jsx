import PropTypes from "prop-types";
import { Link } from "react-router-dom";
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

    let defaultClass = "flex items-center justify-center p-3 text-base font-semibold min-h-[54px] rounded-[10px] ";
    switch (rest.kind) {
        case "primary":
            defaultClass = defaultClass + "bg-primary text-white";
            break;
        case "secondary":
            defaultClass = defaultClass + "bg-secondary text-white";
            break;
        case "ghost":
            defaultClass = defaultClass + "text-secondary dark:text-white dark:bg-opacity-20 bg-secondary bg-opacity-10";
            break;
        default:
            break;
    }

    if (rest.href)
        return (
            <Link to={rest.href} className={`${defaultClass} ${className}`}>
                {child}
            </Link>
        )

    return (
        <button
            className={`${defaultClass} ${isLoading ? "opacity-50 pointer-events-none" : ""} ${className}`}
            type={type}
            {...rest}
        >
            {child}
        </button>
    );
};
Button.propTypes = {
    type: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    isLoading: PropTypes.bool,
    href: PropTypes.string,
    kind: PropTypes.oneOf(["primary", "secondary", "ghost"]),
};
export default Button;
