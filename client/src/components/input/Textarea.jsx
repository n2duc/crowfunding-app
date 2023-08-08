import { useController } from "react-hook-form";
import PropTypes from "prop-types";

const Textarea = (props) => {
    const { control, name, placeholder = "", ...rest } = props;
    const { field } = useController({
        control,
        name,
        defaultValue: "",
    });
    return (
        <textarea
            className="w-full px-[25px] py-[15px] text-sm font-medium bg-transparent border rounded-[10px] placeholder:text-text4 dark:placeholder:text-text2 dark:text-white resize-none min-h-[140px] outline-none"
            placeholder={placeholder}
            {...field}
            {...rest}
        ></textarea>
    );
};
Textarea.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    control: PropTypes.any.isRequired,
};
export default Textarea;
