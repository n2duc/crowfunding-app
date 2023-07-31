import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent";
import DashboardTopbar from "../modules/dashboard/DashboardTopbar";
import DashboardSidebar from "../modules/dashboard/DashboardSidebar";

const LayoutDashboard = ({ children }) => {
    return (
        <div className="p-10 bg-liteBg">
            <DashboardTopbar></DashboardTopbar>
            <div className="flex items-start gap-x-10">
                <DashboardSidebar></DashboardSidebar>
                <div className="flex-1">{children}</div>
            </div>
        </div>
    )
}
LayoutDashboard.propTypes = {
    children: PropTypes.node,
}
export const LayoutDashboardBoundary = withErrorBoundary(LayoutDashboard, {
    FallbackComponent: ErrorComponent,
});