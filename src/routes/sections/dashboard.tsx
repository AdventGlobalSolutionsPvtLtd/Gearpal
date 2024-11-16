import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { AuthGuard } from "@/auth/guard";
import { CONFIG } from "@/config-global";
import AppLayout from "@/layouts/app-layout";
import ChatSection from "@/pages/chat/chat-section";
import Home from "@/pages/dashboard/home";

const layoutContent = (
  <AppLayout>
    <Suspense fallback={<div>Loading Screen</div>}>
      <Outlet />
    </Suspense>
  </AppLayout>
);

export const dashboardRoutes = [
  {
    path: "/home",
    element: CONFIG.auth.skip ? <>{layoutContent}</> : <AuthGuard>{layoutContent}</AuthGuard>,
    children: [{ element: <Home />, index: true }],
  },
  {
    path: "/c",
    element: CONFIG.auth.skip ? <>{layoutContent}</> : <AuthGuard>{layoutContent}</AuthGuard>,
    children: [{ path: ":chatid", element: <ChatSection /> }],
  },
];
