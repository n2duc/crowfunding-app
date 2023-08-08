import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import { defaultImageAuthor } from "../../constants/global";
import DashboardDrop from "./DashboardDrop";
import DashboardSearch from "./DashboardSearch";

const DashboardTopbar = () => {
    return (
        <div className="flex items-center justify-between mb-[30px]">
            <div className="flex items-center gap-10 flex-1 ml-3">
                <Link to="/" className="inline-block">
                    <img srcSet="/Logo.png 2x" alt="logo-crowfunding" />
                </Link>
                <div className="w-full max-w-[458px]">
                    <DashboardSearch></DashboardSearch>
                </div>
            </div>
            <div className="flex items-center gap-10 flex-1 justify-end">
                <DashboardDrop></DashboardDrop>
                <Button
                    type="button"
                    className="max-w-[190px] w-full p-3 h-[52px]"
                    kind="secondary"
                    href="/start-campaign"
                >
                    Start a campaign
                </Button>
                <img
                    src={defaultImageAuthor}
                    alt="logo-crowfunding"
                    className="w-[52px] h-[52px] rounded-full object-cover"
                />
            </div>
        </div>
    );
};

export default DashboardTopbar;
