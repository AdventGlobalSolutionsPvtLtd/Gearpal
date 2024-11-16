import { BadgeCheck, Home, LogOut, LucideIcon } from "lucide-react";

import { signOut } from "@/auth/context/jwt";

export interface Action {
  label: string;
  icon: LucideIcon;
  handler: () => void;
}

export const actions: Action[][] = [
  [
    {
      label: "Account",
      icon: BadgeCheck,
      handler: () => {
        console.log("Opening Account...");
        // Add Account modal logic here
      },
    },
  ],
  [
    {
      label: "Logout",
      icon: LogOut,
      handler: async () => {
        await signOut();
        console.log("Successfully signed out");
      },
    },
  ],
];

export const data = {
  user: {
    name: "",
    email: "",
    avatar: "",
  },
};

export const projects = [
  {
    name: "User chat",
    url: "720b087b-058a-404d-8fb3-d1d3a37123eb",
  },
];

export const items = [
  {
    title: "Home",
    url: "/home",
    icon: Home,
  },
];
