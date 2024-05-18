import { useEffect, lazy } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";

import { PAGE_URL, useUserState } from "@/shared";

const Home = lazy(() => import("@/pages/HomePage"));
const SignIn = lazy(() => import("@/pages/SignInPage"));

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
        <Route path={PAGE_URL.Home} element={<Home />} />
      </Routes>
    </>
  );
};

export default AuthRouter;
