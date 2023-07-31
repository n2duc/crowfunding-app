import Heading from "../components/common/Heading";
import { LayoutDashboardBoundary } from "../layout/LayoutDashboard";
import CampaignGrid from "../modules/campaign/CampaignGrid";
import CampaignItem from "../modules/campaign/CampaignItem";
import { v4 } from "uuid";
import CampaignMine from "../modules/campaign/CampaignMine";
import Gap from "../components/common/Gap";

const DashboardPage = () => {
    return (
        <LayoutDashboardBoundary>
            <Heading number={4}>Your Campaign</Heading>
            <CampaignMine></CampaignMine>
            <Gap></Gap>
            <Heading>Popular Campaign</Heading>
            <CampaignGrid>
                {Array(4).fill(0).map(() => (
                    <CampaignItem key={v4()}></CampaignItem>
                ))}
            </CampaignGrid>
            <Gap></Gap>
            <Heading>Recent Campaign</Heading>
            <CampaignGrid>
                {Array(4).fill(0).map(() => (
                    <CampaignItem key={v4()}></CampaignItem>
                ))}
            </CampaignGrid>
        </LayoutDashboardBoundary>
    )
}

export default DashboardPage