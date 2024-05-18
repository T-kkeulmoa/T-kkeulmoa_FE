import { Suspense } from "react";
import { BrowserRouter as RootRouter } from "react-router-dom";

import { Loading } from "@/entities";

import AppStyles from "./AppStyles";
import AuthRouter from "./AuthRouter";

declare global {
  interface Window {
    kakao: any;
  }
}

const PageRouter = () => (
  <Suspense fallback={<Loading />}>
    <RootRouter>
      <AppStyles />
      <AuthRouter />
    </RootRouter>
  </Suspense>
);

export default PageRouter;
