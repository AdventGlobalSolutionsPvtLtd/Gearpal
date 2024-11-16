import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { GuestGuard } from "@/auth/guard";
import AuthSplitLayout from "@/layouts/auth-split/auth-layout";

// eslint-disable-next-line react-refresh/only-export-components
const Jwt = {
  SignInPage: lazy(() => import("@/pages/auth/jwt/sign-in")),
  SignUpPage: lazy(() => import("@/pages/auth/jwt/sign-up")),
};

const authJwt = {
  path: "jwt",
  children: [
    {
      path: "sign-in",
      element: (
        <GuestGuard>
          <AuthSplitLayout>
            <Jwt.SignInPage />
          </AuthSplitLayout>
        </GuestGuard>
      ),
    },
    {
      path: "sign-up",
      element: (
        <GuestGuard>
          <AuthSplitLayout>
            <Jwt.SignUpPage />
          </AuthSplitLayout>
        </GuestGuard>
      ),
    },
  ],
};

export const authRoutes = [
  {
    path: "auth",
    element: (
      <Suspense fallback={<div>Splach Screen</div>}>
        <Outlet />
      </Suspense>
    ),
    children: [authJwt],
  },
];
