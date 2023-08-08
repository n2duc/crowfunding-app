import CampAuthor from "./parts/CampAuthor";
import CampBanner from "./parts/CampBanner";
import CampCate from "./parts/CampCate";
import CampDesc from "./parts/CampDesc";
import CampMeta from "./parts/CampMeta";
import CampTitle from "./parts/CampTitle";

const CampaignItem = () => {
    return (
        <div className="bg-white dark:bg-darkSecond rounded-[15px] shadow-itemCam dark:shadow-none">
            <CampBanner></CampBanner>
            <div className="py-[15px] px-5">
                <CampCate text="Education"></CampCate>
                <CampTitle>Powered Kits Learning Boxes</CampTitle>
                <CampDesc>Fun, durable and reusable boxes with eco-friendly options.</CampDesc>
                <div className="flex items-start justify-between gap-x-5 mb-5">
                    <CampMeta amount="$2,000" text="Raised of $1,800"></CampMeta>
                    <CampMeta amount="12" text="Total backers"></CampMeta>
                </div>
                <CampAuthor></CampAuthor>
            </div>
        </div>
    );
};

export default CampaignItem;
