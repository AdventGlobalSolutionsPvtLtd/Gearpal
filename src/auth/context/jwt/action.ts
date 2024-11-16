import { paths } from "@/routes/paths";
import { STORAGE_KEY } from "./constant";
import { setSession } from "./utils";

import axios, { endpoints } from "@/utils/axios";

// ----------------------------------------------------------------------

export interface SignInParams {
  username: string;
  password: string;
}

export interface SignUpParams {
  email: string;
  password: string;
  userName: string;
}

/** **************************************
 * Sign in
 *************************************** */
export const signInWithPassword = async ({ username, password }: SignInParams): Promise<void> => {
  try {
    // const params = { username, password };

    // const res = await axios.post(endpoints.auth.signIn, params);

    const formData = new URLSearchParams();
    formData.append("username", username);
    formData.append("password", password);

    const res = await axios.post(endpoints.auth.signIn, formData.toString(), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const { access_token } = res.data;

    if (!access_token) {
      throw new Error("Access token not found in response");
    }

    setSession(access_token);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    const errorMessage =
      (error as Error)?.message || error?.detail || "An unknown error occurred during sign-up.";
    console.error("Error during sign in:", errorMessage);
    throw new Error(errorMessage);
  }
};

/** **************************************
 * Sign up
 *************************************** */
export const signUp = async ({ email, password, userName }: SignUpParams): Promise<void> => {
  try {
    const params = {
      email,
      password,
      username: userName,
    };

    const res = await axios.post(endpoints.auth.signUp, params);

    // const { accessToken } = res.data;

    // if (!accessToken) {
    //  throw new Error("Access token not found in response");
    // }

    // sessionStorage.setItem(STORAGE_KEY, accessToken);

    

    alert(res.data.message);

      if (
      res.data.message &&
      res.data.message ==
        "User registered successfully. Please check your email to confirm your account."
    ) {
      // router.replace(endpoints.auth.signIn)
      window.location.href = paths.auth.jwt.signIn;
    }


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    const errorMessage =
      (error as Error)?.message || error?.detail || "An unknown error occurred during sign-up.";
    console.error("Sign-up error:", errorMessage);
    throw new Error(errorMessage);
  }
};

/** **************************************
 * Sign out
 *************************************** */
export const signOut = async (): Promise<void> => {
  try {
    await axios.post(`${endpoints.auth.signOut}?token=${sessionStorage.getItem(STORAGE_KEY)}`);
    await setSession(null);
  } catch (error) {
    console.error("Error during sign out:", error);
    throw error;
  }
};
