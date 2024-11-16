import { createContext } from "react";

import type { AuthContextValue } from "../types";

// ----------------------------------------------------------------------

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthConsumer = AuthContext.Consumer;
