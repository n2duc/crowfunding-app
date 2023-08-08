import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent";
import DashboardTopbar from "../modules/dashboard/DashboardTopbar";
import DashboardSidebar from "../modules/dashboard/DashboardSidebar";
import { Outlet } from "react-router-dom";
import Overlay from "../components/common/Overlay";

const LayoutDashboard = () => {
    return (
        <div className="p-10 bg-liteBg dark:bg-darkBg">
            <Overlay></Overlay>
            <DashboardTopbar></DashboardTopbar>
            <div className="flex items-start gap-x-10">
                <DashboardSidebar></DashboardSidebar>
                <div className="flex-1">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
export const LayoutDashboardBoundary = withErrorBoundary(LayoutDashboard, {
    FallbackComponent: ErrorComponent,
});