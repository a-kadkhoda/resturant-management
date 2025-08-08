import { BellDot, ChevronDown, SearchIcon } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

const TopBar = () => {
  return (
    <div className="size-full p-6 flex justify-between border-b ">
      <div className="w-max">
        <span className="font-bold text-2xl leading-[132%] tracking-[-0.48px] text-dark-500 dark:text-white">
          Dashboard
        </span>
      </div>
      <div className=" flex gap-4 items-center text-dark-500 dark:text-white">
        <SearchIcon size={24} />
        <BellDot size={24} />
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2">
            <Image
              src={"/user.jpg"}
              className="rounded-full size-10 "
              height={640}
              width={640}
              alt="user"
            />
            <div className="flex flex-col items-start">
              <span className="text-base font-semibold leading-6 tracking-[-0.32px]">
                Aliakbar Kadkhoda
              </span>
              <span className="text-xs font-normal leading-[130%] tracking-[-0.24px] text-gray-500">
                Admin
              </span>
            </div>
            <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-56 bg-white dark:bg-dark-500 "
            align="start"
          >
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Billing
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Keyboard shortcuts
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Email</DropdownMenuItem>
                    <DropdownMenuItem>Message</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>More...</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem>
                New Team
                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>GitHub</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuItem disabled>API</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default TopBar;
