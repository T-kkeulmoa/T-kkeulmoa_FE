import { Suspense } from "react";
import { BrowserRouter as RootRouter } from "react-router-dom";

import { Loading } from "@/entities";

const PageRouter = () => (
  <Suspense fallback={<Loading />}>
    <RootRouter></RootRouter>
  </Suspense>
);

export default PageRouter;
