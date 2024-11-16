import { Navigate, createBrowserRouter } from "react-router-dom";

import { authRoutes } from "./auth";
import { dashboardRoutes } from "./dashboard";
import { mainRoutes } from "./main";

import { CONFIG } from "@/config-global";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Navigate to={CONFIG.auth.redirectPath} replace />,
    },

    // Auth
    ...authRoutes,

    // Dashboard
    ...dashboardRoutes,

    // Main
    ...mainRoutes,

    // No match
    { path: "*", element: <Navigate to="/404" replace /> },
  ],
  { basename: import.meta.env.BASE_URL }
);

export default router;
