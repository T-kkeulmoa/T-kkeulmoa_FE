import { useEffect, lazy } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";

import { PAGE_URL, useUserState } from "@/shared";

const Home = lazy(() => import("@/pages/HomePage"));
const SignIn = lazy(() => import("@/pages/SignInPage"));
const SignUp = lazy(() => import("@/pages/SignUpPage"));
const EcoScan = lazy(() => import("@/pages/EcoScanPage"));
const TrashCan = lazy(() => import("@/pages/TrashCanPage"));
const EcoBadge = lazy(() => import("@/pages/EcoBadgePage"));

const AuthRouter = () => {
  const isSignIn = useUserState((state) => state.isSignIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignIn) navigate(PAGE_URL.SignIn);
  }, []);

  return (
    <>
      <Routes>
        <Route path={PAGE_URL.SignIn} element={<SignIn />} />
        <Route path={PAGE_URL.SignUp} element={<SignUp />} />

        <Route path={PAGE_URL.Home} element={<Home />} />
        <Route path={PAGE_URL.EcoScan} element={<EcoScan />} />
        <Route path={PAGE_URL.EcoBadge} element={<EcoBadge />} />
        <Route path={PAGE_URL.TrashCan} element={<TrashCan />} />
      </Routes>
    </>
  );
};

export default AuthRouter;
