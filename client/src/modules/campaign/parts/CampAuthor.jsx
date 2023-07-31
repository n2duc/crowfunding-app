import { defaultImageAuthor } from "../../../constants/global";
import PropTypes from "prop-types";

const CampAuthor = ({ image = defaultImageAuthor, authorName = "Ngoc Duc" }) => {
    return (
        <div className="flex items-center gap-x-[10px]">
            <img
                src={image}
                className="w-[30px] h-[30px] rounded-full object-cover"
                alt="avatar"
            />
            <p className="text-xs text-text3">
                by{" "}
                <span className="font-semibold text-text2">{authorName}</span>
            </p>
        </div>
    );
};

CampAuthor.propTypes = {
    image: PropTypes.string,
    authorName: PropTypes.string,
};

export default CampAuthor;
