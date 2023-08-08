import { NavLink } from "react-router-dom";
import {
    IconCampaign,
    IconLight,
    IconLogout,
    IconPayment,
    IconProfile,
    IconSquare,
    IconWithdraw,
} from "../../components/icons";

const sidebarItem = [
    {
        icon: <IconSquare></IconSquare>,
        title: "Dashboard",
        path: "/",
    },
    {
        icon: <IconCampaign></IconCampaign>,
        title: "Campaign",
        path: "/campaign",
    },
    {
        icon: <IconPayment></IconPayment>,
        title: "Payment",
        path: "/payment",
    },
    {
        icon: <IconWithdraw></IconWithdraw>,
        title: "Withdraw",
        path: "/withdraw",
    },
    {
        icon: <IconProfile></IconProfile>,
        title: "Profile",
        path: "/profile",
    },
    {
        icon: <IconLogout></IconLogout>,
        title: "Logout",
        path: "/sign-out",
        onClick: () => {},
    },
    {
        icon: <IconLight></IconLight>,
        title: "Light/Dark",
        path: "/!",
        onClick: () => {},
    },
];

const DashboardSidebar = () => {
    const activeLink =
        "text-primary bg-primary bg-opacity-10 dark:text-iconColor dark:bg-darkStroke";
    const navLinkClass =
        "flex items-center gap-x-5 md:justify-center text-iconColor dark:text-text3 last:mt-[130px] last:md:shadow-[10px_10px_20px_0px_rgba(211,211,211,0.25)] md:p-3 py-[14px] px-5 md:rounded-[10px] dark:last:md:shadow-nav";
    return (
        <div className="w-full py-10 px-[14px] md:w-[76px] rounded-[20px] mt-4 bg-white dark:bg-darkSecond shadow-[10px_10px_20px_0px_rgba(218,213,213,0.15)] dark:shadow-none flex flex-col md:gap-y-[30px] gap-y-[15px] flex-shrink-0">
            {sidebarItem.map((link) => (
                <NavLink
                    to={link.path}
                    key={link.title}
                    className={({ isActive }) =>
                        isActive
                            ? `${navLinkClass} ${activeLink}`
                            : navLinkClass
                    }
                >
                    <span>{link.icon}</span>
                    <span className="md:hidden">{link.title}</span>
                </NavLink>
            ))}
        </div>
    );
};

export default DashboardSidebar;
