"use client";
import { Button } from "@/components/ui/button";
import {
  BadgeDollarSign,
  BadgeQuestionMark,
  CookingPot,
  Files,
  FileText,
  LayoutDashboard,
  Moon,
  Settings,
  Sun,
  User,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Item, ListItem } from "../types/interfaces";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Image from "next/image";

const listItems: Item[] = [
  {
    icon: <LayoutDashboard />,
    title: ListItem.Dashboard,
    url: "/dashboard",
  },
  {
    icon: <FileText />,
    title: ListItem.Order,
    url: "/order",
  },
  {
    icon: <UsersRound />,
    title: ListItem.Employee,
    url: "/employee",
  },
  {
    icon: <CookingPot />,
    title: ListItem.Menu,
    url: "/menu",
  },
  {
    icon: <User />,
    title: ListItem.Customer,
    url: "/customer",
  },
  {
    icon: <BadgeDollarSign />,
    title: ListItem.Transaction,
    url: "/transaction",
  },
  {
    icon: <Files />,
    title: ListItem.Report,
    url: "/report",
  },
  {
    icon: <Settings />,
    title: ListItem.Settings,
    url: "/settings",
  },
  {
    icon: <BadgeQuestionMark />,
    title: ListItem.Help_Center,
    url: "/help-center",
  },
];

const SideBar = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const path = usePathname();
  const [curentPath] = path.split("/").filter((item) => item);

  const [selectedItem, setSelectedItem] = useState<ListItem>(
    curentPath as ListItem
  );
  const { setTheme, theme } = useTheme();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return (
    <div className="min-h-full w-[280px] p-6 border flex flex-col justify-between">
      <div className="flex flex-col gap-8">
        <div className=" flex  items-center gap-2 size-full pointer-events-none select-none pl-4">
          <Image
            className="aspect-[2/1] w-3/5"
            src={"/logo.png"}
            height={1024}
            width={1536}
            alt="Logo"
          />
        </div>
        <div className="flex flex-col gap-1">
          {listItems.slice(0, 7).map((item, index) => {
            return (
              <Link
                href={item.url}
                key={index}
                className={`flex px-4 py-3 w-full h-12 gap-3 hover:bg-primary-500 rounded-lg hover:text-white transition-colors duration-200 ${
                  selectedItem == item.title.toLowerCase()
                    ? "text-white bg-primary-500"
                    : "text-dark-500  dark:text-white"
                } `}
                onClick={() =>
                  setSelectedItem(item.title.toLowerCase() as ListItem)
                }
              >
                <div>{item.icon}</div>
                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          {listItems.slice(7).map((item, index) => {
            return (
              <Link
                href={item.url}
                key={index}
                className={`flex px-4 py-3 w-full h-12 gap-3 hover:bg-primary-500 rounded-lg hover:text-white transition-colors duration-200 ${
                  selectedItem == item.title
                    ? "text-white bg-primary-500"
                    : "text-dark-500 dark:text-white"
                } `}
                onClick={() => setSelectedItem(item.title)}
              >
                <div>{item.icon}</div>
                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>
        <div className="flex gap-1">
          <Button
            type="button"
            className={`w-1/2  rounded-lg h-12 text-base font-normal leading-6 tracking-[-0.32px]  hover:bg-primary-500 shadow-none cursor-pointer transition-colors duration-200 ${
              theme == "dark"
                ? "bg-transparent text-white"
                : "bg-primary-500 text-white"
            }`}
            onClick={() => setTheme("light")}
          >
            <Sun size={24} className="text-white " />
            <span>Light</span>
          </Button>
          <Button
            type="button"
            className={`group w-1/2 rounded-lg h-12  text-base font-normal leading-6 tracking-[-0.32px]  hover:bg-primary-500 hover:text-white shadow-none  cursor-pointer transition-colors duration-200 ${
              theme == "dark"
                ? "bg-primary-500 text-white"
                : "text-dark-500  bg-transparent"
            }`}
            onClick={() => setTheme("dark")}
          >
            <Moon
              size={24}
              className={` text-dark-500 ${
                theme === "dark" ? "bg-primary-500 text-white" : "text-dark-500"
              } group-hover:text-white transition-colors duration-200 `}
            />
            <span>Dark</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
