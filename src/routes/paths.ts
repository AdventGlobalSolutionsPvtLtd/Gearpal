const ROOTS = {
  AUTH: "/auth",
  DASHBOARD: "/home",
};

export const paths = {
  auth: {
    jwt: {
      signIn: `${ROOTS.AUTH}/jwt/sign-in`,
      signUp: `${ROOTS.AUTH}/jwt/sign-up`,
      resetPassword: `${ROOTS.AUTH}/jwt/reset-password`,
    },
  },
  dashboard: {
    root: ROOTS.DASHBOARD,
  },
};
