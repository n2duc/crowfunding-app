import PropTypes from "prop-types";

const CampMeta = ({ amount = "0", text = "a", size = "sm" }) => {
    return (
        <div className="flex flex-col gap-y-1">
            <h4
                className={`font-semibold text-text2 text ${
                    size === "xs" ? "text-xs"
                        : size === "base" ? "text-base" 
                        : size === "lg" ? "text-xl"
                        : "text-sm"
                }`}
            >
                {amount}
            </h4>
            <span className={`text-text4 ${size === "lg" ? "text-base" : size === "base" ? "text-sm" : "text-xs"}`}>{text}</span>
        </div>
    );
};

CampMeta.propTypes = {
    amount: PropTypes.string,
    text: PropTypes.string,
    size: PropTypes.oneOf(["xs", "sm", "base", "lg"]),
};

export default CampMeta;
