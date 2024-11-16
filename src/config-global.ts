import { paths } from "./routes/paths";

export interface ConfigValue {
  appName: string;
  serverUrl: string;
  assetsDir: string;
  auth: {
    method: "jwt";
    skip: boolean;
    redirectPath: string;
  };
}

export const CONFIG: ConfigValue = {
  appName: "gearpal",
  serverUrl: import.meta.env.VITE_SERVER_URL ?? "",
  assetsDir: import.meta.env.VITE_ASSETS_DIR ?? "",

  /**
   * Auth
   * @method jwt
   */

  auth: {
    method: "jwt",
    skip: false,
    redirectPath: paths.dashboard.root,
  },
};
