import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const CampaignPage = lazy(() => import("./pages/CampaignPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));

const App = () => {
    return (
        <Suspense fallback={<p></p>}>
            <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/campaign" element={<CampaignPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/sign-in" element={<SignInPage />} />
            </Routes>
        </Suspense>
    );
};

export default App;
