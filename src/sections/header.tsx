import { useCallback } from "react";

import { useAuthContext } from "@/auth/hooks";
import { ModeToggle } from "@/components/mode-toggle";
import { NavActions } from "@/components/nav-actions";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Action, actions } from "@/constants/data";

export function Header() {
  const { checkUserSession } = useAuthContext();

  const handleActionClick = useCallback(
    async (action: Action) => {
      if (action.handler) {
        try {
          await action.handler();
          await checkUserSession?.();

          // Call the corresponding async handler
        } catch (error) {
          console.error(`Error executing handler for action: ${action.label}`, error);
        }
      } else {
        console.warn(`No handler defined for action: ${action.label}`);
      }
    },
    [checkUserSession]
  );

  return (
    <header className="sticky top-0 flex items-center h-auto gap-2 px-4 py-4 border-b shrink-0 z-10 bg-background">
      <SidebarTrigger className="-ml-1" />
      <div className="flex items-center gap-3 ml-auto">
        <ModeToggle />
        <NavActions actions={actions} onActionClick={handleActionClick} />
      </div>
    </header>
  );
}
