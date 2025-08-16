"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toCamelCase } from "@/features/shared/utils/stringUtils";
import { Filter, Plus, Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const OptionBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const path = pathname.split("/").pop() ?? "";

  const routes: Record<string, string> = {
    order: "/order/add-new-order",
    employee: "/employee/add-new-employee",
  };

  const handleNavigationToAddPage = () => {
    const target = routes[path];
    if (target) router.push(target);
  };

  return (
    <div className="size-full flex justify-between">
      <div className="flex border items-center justify-between rounded-lg px-4 py-1 min-w-[320px]">
        <Search />
        <Input
          type="text"
          placeholder="Search"
          className="border-none !bg-transparent shadow-none focus-visible:outline-none focus-visible:ring-0 placeholder:text-gray-500"
        />
      </div>
      <div className=" flex gap-4">
        <Button
          type="button"
          className="h-full  bg-transparent hover:bg-transparent text-dark-500 dark:text-white cursor-pointer border text-base leading-[150%] tracking-[-0.32px] px-4 py-3"
        >
          <Filter /> Filter
        </Button>
        <Button
          type="button"
          className="h-full bg-primary-500 hover:bg-primary-700 text-white cursor-pointer border text-base leading-[150%] tracking-[-0.32px] px-4 py-3"
          onClick={handleNavigationToAddPage}
        >
          <Plus /> {toCamelCase(`Add New ${path}`)}
        </Button>
      </div>
    </div>
  );
};

export default OptionBar;
