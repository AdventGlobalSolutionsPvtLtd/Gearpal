import authGradientBg from "@/assets/auth-bg.png";
import authHandImage from "@/assets/auth-hand.png";

export interface AuthSplitLayoutProps {
  children: React.ReactNode;
}

export default function AuthSplitLayout({ children }: AuthSplitLayoutProps) {
  return (
    <div className="w-full flex justify-center">
      <div className="container h-screen flex flex-col items-center justify-start md:grid md:max-w-none md:justify-center lg:max-w-none lg:grid-cols-5 lg:px-0">
        {/* ---------------------------------------------- */}

        <div className="relative hidden col-span-3 h-full flex-col p-10 text-white dark:border-r lg:flex">
          <div className="relative z-20 flex items-center text-2xl font-semibold tracking-widest select-none">
            TOYOTA
          </div>

          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${authGradientBg})`,
            }}
          >
            <img
              src={authHandImage}
              alt="overlayed image of hand"
              className="w-2/3 absolute bottom-0 inset-x-0 mx-auto mix-blend-color-dodge"
              style={{
                pointerEvents: "none",
              }}
            />
          </div>

          <div className="relative z-20 mt-16 space-y-8 max-w-xl">
            <header>
              <h1 className="text-4xl tracking-wide font-semibold">
                Learn, Discover & Automate in One Place.
              </h1>
            </header>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="col-span-2 h-full flex justify-center items-center pb-8">{children}</div>
      </div>
    </div>
  );
}
