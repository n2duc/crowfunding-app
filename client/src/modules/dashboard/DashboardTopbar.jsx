import Button from "../../components/button/Button";
import DashboardDrop from "./DashboardDrop";
import DashboardSearch from "./DashboardSearch";

const DashboardTopbar = () => {
    return (
        <div className="flex items-center justify-between mb-[30px]">
            <div className="flex items-center gap-10 flex-1 ml-3">
                <img srcSet="/Logo.png 2x" alt="logo-crowfunding" />
                <div className="w-full max-w-[458px]">
                    <DashboardSearch></DashboardSearch>
                </div>
            </div>
            <div className="flex items-center gap-10 flex-1 justify-end">
                <DashboardDrop></DashboardDrop>
                <Button type="button" className="bg-secondary max-w-[190px] w-full p-3 h-[52px]">Start a campaign</Button>
                <img srcSet="/Logo.png 2x" alt="logo-crowfunding" className="rounded-full object-cover" />
            </div>
        </div>
    );
};

export default DashboardTopbar;
