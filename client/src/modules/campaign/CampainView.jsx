import { Link } from "react-router-dom"
import Button from "../../components/button/Button"
import CampBanner from "./parts/CampBanner"
import CampCate from "./parts/CampCate"
import CampDesc from "./parts/CampDesc"
import CampMeta from "./parts/CampMeta"
import CampTitle from "./parts/CampTitle"
import CampViewAuthor from "./parts/CampViewAuthor"
import CampaignSupport from "./CampaignSupport"
import CampaignPerk from "./CampaignPerk"
import CampaignGrid from "./CampaignGrid"
import CampaignItem from "./CampaignItem"

const CampainView = () => {
    return (
        <>
            <div
                className="h-[140px] rounded-[25px] bg-cover bg-no-repeat bg-center bg-opacity-40 flex items-center
                justify-center text-white mb-10"
                style={{
                    backgroundImage: `linear-gradient(180deg, rgba(32, 18, 63, 0.00) 0%, rgba(0, 0, 0, 0.4) 93.43%), url(/banner.jpg)`,
                }}
            >
                <h1 className="text-[40px] font-bold">Education</h1>
            </div>
            <div className="flex items-start gap-x-10 w-full max-w-[1066px]">
                <div className="max-w-[583px] w-full">
                    <CampBanner className="h-[398px] w-full rounded-[25px] mb-[30px]"></CampBanner>
                    <div className="flex justify-center gap-x-5">
                        {Array(4).fill(0).map((item, index) => (
                            <img key={`${index}_camera`} className="h-[70px] w-[89px] rounded-md object-cover" src="/camera.png" alt="image_camera" />
                        ))}
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex items-center justify-between text-text3">
                        <CampCate text="Film" size={1} className="text-sm mb-[15px]"></CampCate>
                        <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                            </svg>
                        </Link>
                    </div>
                    <CampTitle className="text-xl font-bold mb-[15px]">Meet - AI Virtual Background 4K Webcam</CampTitle>
                    <CampDesc className="text-sm leading-[22px] mb-[25px]">
                        The first-ever 4K webcam that embeded AI technology to protect your background during video calls.
                    </CampDesc>
                    <CampViewAuthor></CampViewAuthor>
                    <div className="w-full rounded-full bg-[#EFEFEF] h-[5px] mb-5">
                        <div className="h-full w-2/4 rounded-full bg-primary"></div>
                    </div>
                    <div className="flex items-start justify-between gap-x-5 mb-[15px]">
                        <CampMeta size="lg" amount="$2,000" text="Raised of $2,500"></CampMeta>
                        <CampMeta size="lg" amount="173" text="Total backers"></CampMeta>
                        <CampMeta size="lg" amount="30" text="Days left"></CampMeta>
                    </div>
                    <Button type="button" kind="primary" className="w-full">Back this project</Button>
                </div>
            </div>
            <div className="flex items-center justify-between mt-[100px] bg-white p-5 border-b border-b-slate-100 mb-6">
                <div className="flex items-center text-sm font-medium gap-x-14 text-text3">
                    <span className="cursor-pointer text-secondary">Campaign</span>
                    <span className="cursor-pointer text-text3">Risks</span>
                    <span className="cursor-pointer text-text3">FAQ</span>
                </div>
                <Button className="text-white bg-primary px-8">Back this project</Button>
            </div>
            <div className="grid gap-x-[124px] grid-cols-[1.37fr,1fr] mb-[70px]">
                <div>
                    <h2 className="mb-5 text-lg font-semibold uppercase">Story</h2>
                    <div className="w-full bg-white">
                        <p className="p-[30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aliquid dolores temporibus laboriosam animi voluptas consequuntur provident maxime nihil, reiciendis illo quidem, in a? Sed amet et minus error nihil.</p>
                        <p className="p-[30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aliquid dolores temporibus laboriosam animi voluptas consequuntur provident maxime nihil, reiciendis illo quidem, in a? Sed amet et minus error nihil.</p>
                        <p className="p-[30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aliquid dolores temporibus laboriosam animi voluptas consequuntur provident maxime nihil, reiciendis illo quidem, in a? Sed amet et minus error nihil.</p>
                    </div>
                </div>
                <div>
                    <CampaignSupport></CampaignSupport>
                    <div className="mb-[60px]"></div>
                    <div className="flex flex-col gap-y-[30px]">
                        <CampaignPerk></CampaignPerk>
                        <CampaignPerk></CampaignPerk>
                        <CampaignPerk></CampaignPerk>
                    </div>
                </div>
            </div>
            <h2 className="mb-10 text-xl font-semibold">
                You also may be interested in
            </h2>
            <CampaignGrid>
                <CampaignItem></CampaignItem>
                <CampaignItem></CampaignItem>
                <CampaignItem></CampaignItem>
                <CampaignItem></CampaignItem>
            </CampaignGrid>
        </>
    );
};

export default CampainView;
