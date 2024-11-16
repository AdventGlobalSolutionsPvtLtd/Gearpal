import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Page404 from "@/pages/error/404";

export const mainRoutes = [
  {
    element: (
      <Suspense fallback={<div>Splash Screen</div>}>
        <Outlet />
      </Suspense>
    ),
    children: [{ path: "404", element: <Page404 /> }],
  },
];
