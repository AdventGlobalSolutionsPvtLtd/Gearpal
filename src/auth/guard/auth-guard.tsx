import { useState, useEffect, useCallback } from "react";

import { useAuthContext } from "../hooks";

import { CONFIG } from "@/config-global";
import { usePathname, useRouter, useSearchParams } from "@/routes/hooks";
import { paths } from "@/routes/paths";

// ----------------------------------------------------------------------

interface Props {
  children: React.ReactNode;
}

export function AuthGuard({ children }: Props) {
  const router = useRouter();

  const pathname = usePathname();

  const searchParams = useSearchParams();

  const { authenticated, loading } = useAuthContext();

  const [isChecking, setIsChecking] = useState<boolean>(true);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const checkPermissions = async (): Promise<void> => {
    if (loading) {
      return;
    }

    if (!authenticated) {
      const { method } = CONFIG.auth;

      const signInPath = {
        jwt: paths.auth.jwt.signIn,
      }[method];

      const href = `${signInPath}?${createQueryString("returnTo", pathname)}`;

      router.replace(href);
      return;
    }

    setIsChecking(false);
  };

  useEffect(() => {
    checkPermissions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticated, loading]);

  if (isChecking) {
    return <div>Splash Screen</div>;
  }

  return <>{children}</>;
}
