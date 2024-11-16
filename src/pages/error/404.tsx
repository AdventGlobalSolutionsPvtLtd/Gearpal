import { Link } from "react-router-dom";

const Page404 = () => (
  <main className="grid min-h-full px-6 py-24 bg-white place-items-center sm:py-32 lg:px-8">
    <div className="text-center">
      <p className="text-base font-semibold text-primary">404</p>
      <h1 className="mt-4 text-5xl font-semibold tracking-tight text-gray-900 text-balance sm:text-7xl">
        Page not found
      </h1>
      <p className="mt-6 text-lg font-medium text-gray-500 text-pretty sm:text-xl/8">
        Sorry, we couldn&#39;t find the page you&#39;re looking for.
      </p>
      <div className="flex items-center justify-center mt-10 gap-x-6">
        <Link
          to="/home"
          className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Go back home
        </Link>
      </div>
    </div>
  </main>
);

export default Page404;
