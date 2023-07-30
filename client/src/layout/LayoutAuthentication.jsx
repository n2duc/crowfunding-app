import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent";

const LayoutAuthentication = (props) => {
    const { children, heading } = props;
    return (
        <div className="w-full mx-auto min-h-screen p-10 bg-liteBg relative isolate dark:bg-darkBg">
            <img src="/Ellipse.png" alt="ellipse" className="hidden lg:block absolute pointer-events-none bottom-0 right-0 left-0 -z-10"/>
            <Link to="/" className="inline-block mb-5 lg:mb-[60px]">
                <img srcSet="/Logo.png 2x" alt="logo-crowfunding" />
            </Link>
            <div className="w-full max-w-[556px] mx-auto bg-white dark:bg-darkSecond rounded-[10px] px-5 py-[30px] lg:px-[60px] lg:py-[50px]">
                <h1 className="font-semibold text-lg mb-[5px] text-text1 dark:text-white text-center lg:text-xl lg:mb-[10px]">{heading}</h1>
                {children}
            </div>
        </div>
    )
}

LayoutAuthentication.propTypes = {
    heading: PropTypes.string,
    children: PropTypes.node,
}
export const LayoutAuthenticationErrorBoundary = withErrorBoundary(LayoutAuthentication, {
    FallbackComponent: ErrorComponent,
});
// export default withErrorBoundary(LayoutAuthentication, {
//     FallbackComponent: ErrorComponent,
// });