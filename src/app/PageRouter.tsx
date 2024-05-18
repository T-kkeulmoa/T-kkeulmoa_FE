import { Suspense, lazy } from "react";
import { BrowserRouter as RootRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { PAGE_URL } from "@/shared";
import { Loading } from "@/entities";

declare global {
  interface Window {
    kakao: any;
  }
}

const Home = lazy(() => import("@/pages/HomePage"));

const PageRouter = () => (
  <Suspense fallback={<Loading />}>
    <RootRouter>
      <Routes>
        <Route path={PAGE_URL.Home} element={<Home />} />
      </Routes>
    </RootRouter>
  </Suspense>
);

export default PageRouter;
