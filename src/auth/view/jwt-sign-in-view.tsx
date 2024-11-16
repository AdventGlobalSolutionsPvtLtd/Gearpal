import { Link } from "react-router-dom";

import { JwtSignInForm } from "./sections";

import { paths } from "@/routes/paths";

const JwtSignInView = () => (
  <>
    {/* ---------------------------------------------- */}

    <div className="px-8 h-full md:h-auto">
      <div className="mx-auto flex w-full flex-col justify-center space-y-4 sm:w-[350px]">
        <div className="lg:hidden flex items-center text-2xl font-semibold tracking-widest select-none mt-12 md:mt-auto text-primary">
          TOYOTA
        </div>

        <div className="flex flex-col space-y-2">
          <h1 className="text-xl font-semibold tracking-tight">Sign In</h1>
          <p className="text-sm text-muted-foreground">
            Please enter email and password to proceed to continue.
          </p>
        </div>

        <JwtSignInForm />

        <p className="px-8 text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link
            to={paths.auth.jwt.signUp}
            className="underline underline-offset-4 hover:text-primary"
          >
            Register
          </Link>
        </p>

        <p className="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <a href="/terms" className="underline underline-offset-4 hover:text-primary">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="underline underline-offset-4 hover:text-primary">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  </>
);

export default JwtSignInView;
