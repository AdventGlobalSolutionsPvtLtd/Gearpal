import { RouterProvider } from "react-router-dom";

import { Toaster } from "./components/ui/toaster";

import { AuthProvider } from "@/auth/context/jwt";
import { ThemeProvider } from "@/components/theme-provider";
import router from "@/routes/sections";

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider defaultTheme="dark" storageKey="gearpal-ui-theme">
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
