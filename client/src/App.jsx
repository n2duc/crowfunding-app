import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { LayoutDashboardBoundary } from "./layout/LayoutDashboard";
import CampainView from "./modules/campaign/CampainView";
import LayoutPayment from "./layout/LayoutPayment";
import CheckoutPage from "./pages/CheckoutPage";
import ShippingPage from "./pages/ShippingPage";

const SignInPage = lazy(() => import("./pages/SignInPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const CampaignPage = lazy(() => import("./pages/CampaignPage"));
const StartCampaignPage = lazy(() => import("./pages/StartCampaignPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const App = () => {
    return (
        <Suspense fallback={<p></p>}>
            <Routes>
                <Route element={<LayoutDashboardBoundary />}>
                    <Route path="/" element={<DashboardPage />} />
                    <Route path="/campaign" element={<CampaignPage />} />
                    <Route path="/start-campaign" element={<StartCampaignPage />} />
                    <Route path="/campaign/:slug" element={<CampainView />} />
                </Route>
                <Route element={<LayoutPayment></LayoutPayment>}>
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/shipping-address" element={<ShippingPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />}></Route>
                <Route path="/register" element={<SignUpPage />} />
                <Route path="/login" element={<SignInPage />} />
            </Routes>
        </Suspense>
    );
};

export default App;