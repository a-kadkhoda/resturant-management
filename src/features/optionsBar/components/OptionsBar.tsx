"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Plus, Search } from "lucide-react";
import React from "react";

const OptionsBar = () => {
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
        >
          <Plus /> Add New Order
        </Button>
      </div>
    </div>
  );
};

export default OptionsBar;
