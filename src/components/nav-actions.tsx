import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

import { Action } from "@/constants/data";

export function NavActions({
  actions,
  onActionClick,
}: {
  actions: Action[][];
  onActionClick: (action: Action) => void;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  // ------------------------------------

  const handleActionClick = React.useCallback(
    (groupIndex: number, actionIndex: number) => {
      const action = actions[groupIndex][actionIndex];
      onActionClick(action);
      setIsOpen(false);
    },
    [actions, onActionClick]
  );

  // ------------------------------------

  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const groupIndex = parseInt(event.currentTarget.dataset.groupIndex || "-1", 10);
      const actionIndex = parseInt(event.currentTarget.dataset.actionIndex || "-1", 10);

      if (groupIndex >= 0 && actionIndex >= 0) {
        handleActionClick(groupIndex, actionIndex);
      }
    },
    [handleActionClick]
  );

  // ------------------------------------

  const renderedActions = React.useMemo(
    () =>
      actions.map((group, groupIndex) => (
        <SidebarGroup key={groupIndex} className="border-b last:border-none">
          <SidebarGroupContent className="gap-0">
            <SidebarMenu>
              {group.map((item, actionIndex) => (
                <SidebarMenuItem key={actionIndex}>
                  <SidebarMenuButton
                    data-group-index={groupIndex}
                    data-action-index={actionIndex}
                    onClick={handleClick}
                  >
                    <item.icon /> <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      )),
    [actions, handleClick]
  );

  // ------------------------------------

  return (
    <div className="flex items-center gap-2 text-sm ">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 data-[state=open]:bg-accent rounded-full"
          >
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-56 overflow-hidden rounded-lg p-0" align="end">
          <Sidebar collapsible="none" className="bg-transparent">
            <SidebarContent>{renderedActions}</SidebarContent>
          </Sidebar>
        </PopoverContent>
      </Popover>
    </div>
  );
}
