"use client";
import { BellDot, ChevronDown, SearchIcon } from "lucide-react";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useSelectedLayoutSegments } from "next/navigation";
import DynamicBreadcrumb from "./DynamicBreadcrumb";
import { toCamelCase } from "../../shared/utils/stringUtils";

const TopBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const segments = useSelectedLayoutSegments();
  const [curentPage] =
    segments.length > 1
      ? segments.slice(0, segments.length - 1).slice(-1)
      : segments;

  return (
    <div className="size-full p-6 flex justify-between border-b items-center ">
      <div className="w-max flex flex-col justify-start gap-1.5">
        <span className="font-bold text-2xl leading-[132%] tracking-[-0.48px] text-dark-500 dark:text-white">
          {toCamelCase(curentPage)}
        </span>
        {segments.length > 1 && <DynamicBreadcrumb />}
      </div>
      <div className=" flex gap-4 items-center text-dark-500 dark:text-white">
        <SearchIcon size={24} />
        <BellDot size={24} />

        {isLoggedIn ? (
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 outline-none hover:shadow-lg hover:shadow-dark-700  rounded-lg transition-all duration-700 cursor-pointer pb-1">
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
              <DropdownMenuLabel className="text-gray-500">
                My Account
              </DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem>Profile</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>GitHub</DropdownMenuItem>
              <DropdownMenuItem disabled>API</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button
            type="button"
            onClick={() => setIsLoggedIn(true)}
            className="bg-primary-500 text-dark-500 dark:text-white font-bold cursor-pointer hover:bg-dark-100"
          >
            Log In
          </Button>
        )}
      </div>
    </div>
  );
};

export default TopBar;
