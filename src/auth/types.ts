// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type UserType = Record<string, any> | null;

export interface AuthState {
  user: UserType;
  loading: boolean;
}

export interface AuthContextValue {
  user: UserType;
  loading: boolean;
  authenticated: boolean;
  unauthenticated: boolean;
  checkUserSession?: () => Promise<void>;
}
