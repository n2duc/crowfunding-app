import PropTypes from "prop-types";

const ButtonGoogle = ({ text = "Sign up with google", onClick = () => {} }) => {
    return (
        <button className="flex items-center justify-center gap-x-2.5 w-full py-[13px] border border-strock dark:border-darkStroke rounded-[10px] text-base font-semibold text-text2 dark:text-white mb-5" onClick={onClick}>
            <img srcSet="/Google.png 2x" alt="icon-google" />
            <span>{text}</span>
        </button>
    );
};
ButtonGoogle.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
}
export default ButtonGoogle;
