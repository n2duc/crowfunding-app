import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../common/ErrorComponent";

const Input = (props) => {
    const { control, name, type = "text", error = "", placeholder, children, className } = props;
    const { field } = useController({
        control,
        name,
        defaultValue: "",
    });
    return (
        <div className="relative">
            <input
                id={name}
                type={type}
                className={`w-full py-[15px] px-[25px] border rounded-[10px] bg-transparent dark:text-white text-sm font-medium placeholder:text-text4 dark:placeholder:text-text2 ${
                    error.length > 0 ? "border-error text-error" : "border-strock text-text1 dark:border-darkStroke"
                } ${children ? "pr-14" : ""} ${className}`}
                placeholder={error.length > 0 ? "" : placeholder}
                {...field}
            />
            {error.length > 0 && (
                <span className="absolute text-sm font-medium text-error top-2/4 -translate-y-2/4 left-[25px] error-input">
                    {error}
                </span>
            )}
            {children && <span className="absolute right-[25px] top-2/4 -translate-y-2/4 cursor-pointer text-iconColor dark:text-text2 select-none">
                {children}
            </span>}
        </div>
    );
};

Input.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    control: PropTypes.any.isRequired,
    error: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
};

export const InputBoundary = withErrorBoundary(Input, {
    FallbackComponent: ErrorComponent
});
