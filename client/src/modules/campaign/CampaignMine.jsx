import CampBanner from "./parts/CampBanner"
import CampCate from "./parts/CampCate"
import CampDesc from "./parts/CampDesc"
import CampMeta from "./parts/CampMeta"
import CampTitle from "./parts/CampTitle"

const CampaignMine = () => {
    return (
        <div className="flex items-center gap-x-[30px] w-full max-w-[1048px]">
            <CampBanner className="h-[266px] max-w-[583px] w-full rounded-[25px]"></CampBanner>
            <div className="flex-1">
                <CampCate text="Architecture" size={1} className="text-sm mb-3"></CampCate>
                <CampTitle className="text-xl font-bold mb-[15px]">Remake - We Make architecture exhibition</CampTitle>
                <CampDesc className="text-sm mb-5">Remake - We Make: an exhibition about architecture&rsquo;s social agency in the face of urbanisation</CampDesc>
                <div className="w-full rounded-full bg-[#EFEFEF] h-[5px] mb-[22px]">
                    <div className="h-full w-2/4 rounded-full bg-primary"></div>
                </div>
                <div className="flex items-start justify-between gap-x-5">
                    <CampMeta size="lg" amount="$2,000" text="Raised of $2,500"></CampMeta>
                    <CampMeta size="lg" amount="173" text="Total backers"></CampMeta>
                    <CampMeta size="lg" amount="30" text="Days left"></CampMeta>
                </div>
            </div>
        </div>
    )
}

export default CampaignMine