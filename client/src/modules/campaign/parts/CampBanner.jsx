import { defaultImageBanner } from "../../../constants/global";
import PropTypes from "prop-types";

const CampBanner = ({ image = defaultImageBanner, className = "h-[158px] rounded-[15px]" }) => {
    return (
        <div className={`overflow-hidden ${className}`}>
            <img
                src={image}
                alt="campaign-image"
                className="w-full h-full object-cover"
            />
        </div>
    );
};

CampBanner.propTypes = {
    image: PropTypes.string,
    className: PropTypes.string,
};

export default CampBanner;
