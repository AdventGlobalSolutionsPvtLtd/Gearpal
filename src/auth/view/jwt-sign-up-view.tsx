import { Link } from "react-router-dom";

import { JwtSignUpForm } from "./sections";

import { paths } from "@/routes/paths";

// import { buttonVariants } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

const JwtSignUpView = () => (
  <>
    {/* <a
      href="/examples/authentication"
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "absolute right-4 top-4 md:right-8 md:top-4"
      )}
    >
      Login
    </a> */}

    {/* ---------------------------------------------- */}

    <div className="px-8 h-full md:h-auto">
      <div className="mx-auto flex w-full flex-col justify-center space-y-4 sm:w-[350px]">
        <div className="lg:hidden flex items-center text-2xl font-semibold tracking-widest select-none mt-12 md:mt-auto text-primary">
          TOYOTA
        </div>

        <div className="flex flex-col space-y-2">
          <h1 className="text-xl font-semibold tracking-tight">Sign Up</h1>
          <p className="text-sm text-muted-foreground">
            Please enter username, email and password to proceed to continue.
          </p>
        </div>

        <JwtSignUpForm />

        <p className="px-8 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            to={paths.auth.jwt.signIn}
            className="underline underline-offset-4 hover:text-primary"
          >
            Login
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

export default JwtSignUpView;
