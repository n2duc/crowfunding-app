import Button from "../components/button/Button";
import Gap from "../components/common/Gap";
import Heading from "../components/common/Heading";
import CampaignGrid from "../modules/campaign/CampaignGrid";
import CampaignMine from "../modules/campaign/CampaignMine";

const CampaignPage = () => {
    return (
        <>
            <div className="flex items-center justify-between mb-10 bg-white dark:bg-darkSecond rounded-[20px] px-10 py-8">
                <div className="flex items-start gap-x-6">
                    <div className="w-[54px] h-[54px] rounded-full flex items-center justify-center bg-secondary bg-opacity-60 text-white cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-7 h-7"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6v12m6-6H6"
                            />
                        </svg>
                    </div>
                    <div className="flex-1 text-sm">
                        <h1 className="text-text1 dark:text-white text-[22px] font-semibold mb-2">Create Your Campaign</h1>
                        <p className="text-text3 mb-2">Jump right into our editor and create your first Virtue campaign!</p>
                        <a href="#!" className="text-primary">Need any help? Learn More...</a>
                    </div>
                </div>
                <Button type="button" className="py-[13px] px-[30px]" kind="ghost" href="/start-campaign">Create campaign</Button>
            </div>
            <Heading number={4}>Your Campaign</Heading>
            <CampaignGrid type="col-1">
                <CampaignMine></CampaignMine>
                <CampaignMine></CampaignMine>
                <CampaignMine></CampaignMine>
                <CampaignMine></CampaignMine>
                <Button type="button" kind="ghost" className="mx-auto py-[13px] px-14">See more+</Button>
            </CampaignGrid>
            <Gap></Gap>
            <Heading number={4}>Your Campaign</Heading>
            <CampaignGrid type="col-1">
                <CampaignMine></CampaignMine>
                <CampaignMine></CampaignMine>
                <CampaignMine></CampaignMine>
                <CampaignMine></CampaignMine>
                <Button type="button" kind="ghost" className="mx-auto py-[13px] px-14">See more+</Button>
            </CampaignGrid>
        </>
    );
};

export default CampaignPage;
