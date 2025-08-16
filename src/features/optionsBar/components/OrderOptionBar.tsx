"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Download, PlusIcon } from "lucide-react";
import { orderStatus } from "@/features/orderTable/orderData";
import { ColorOrderStatus } from "@/features/orderTable/components/OrderTable";
import { ParamValue } from "next/dist/server/request/params";

import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const StatusItems = Object.values(orderStatus);

interface OrderOptionBar {
  status?: orderStatus;
  id?: ParamValue;
}

const menu = [
  {
    label: "San Francisco sourdough bread",
    price: 80,
    id: "1",
  },
  {
    label: "Cobb salad",
    price: 40,
    id: "2",
  },
  {
    label: "Biscuits ‘n’ gravy",
    price: 100,
    id: "3",
  },
];

const OrderOptionBar: React.FC<OrderOptionBar> = ({
  id,
  status = "New Order",
}) => {
  const [statusSelected, setStatusSelected] = useState<string>(status);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <div className="size-full flex justify-between items-center ">
      {id ? (
        <span className="text-2xl font-bold leading-[132%] tracking-[-0.48px]">
          #{id}
        </span>
      ) : (
        <div className="flex items-center gap-4">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[400px] justify-between !bg-transparent shadow-none"
              >
                {value
                  ? menu.find((item) => item.label === value)?.label
                  : "Menu"}
                <ChevronsUpDown className="opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[400px] p-0 ">
              <Command className="bg-white dark:bg-dark-500">
                <CommandInput placeholder="Search Menu ..." className="h-9" />
                <CommandList>
                  <CommandEmpty>No framework found.</CommandEmpty>
                  <CommandGroup>
                    {menu.map((item) => (
                      <CommandItem
                        key={item.id}
                        value={item.label}
                        onSelect={(currentValue) => {
                          setValue((prev) =>
                            currentValue === prev ? "" : currentValue
                          );
                          setOpen(false);
                        }}
                      >
                        <span>{item.label}</span>
                        <span>${item.price}</span>
                        <Check
                          className={`ml-auto ${
                            value === item.label ? "opacity-100" : "opacity-0"
                          }
                       `}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <Button className="bg-primary-500 text-white hover:bg-primary-700 cursor-pointer">
            <PlusIcon /> Add
          </Button>
        </div>
      )}
      <div className="flex  h-full gap-4">
        <Select
          defaultValue={status}
          onValueChange={(value) => setStatusSelected(value)}
        >
          <SelectTrigger className="min-h-full  cursor-pointer text-base font-normal leading-[150%] tracking-[-0.32px]">
            <SelectValue placeholder={"Select Status"}>
              {statusSelected && (
                <div>
                  <span>Status : </span>
                  <span
                    style={{
                      color:
                        ColorOrderStatus[
                          statusSelected.replace(
                            /\s+/g,
                            "_"
                          ) as keyof typeof ColorOrderStatus
                        ],
                    }}
                  >
                    {statusSelected}
                  </span>
                </div>
              )}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {StatusItems.map((item, index) => {
              return (
                <SelectItem key={index} value={item}>
                  {item}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
        <Button
          type="button"
          className="bg-primary-500 text-white h-full hover:bg-primary-700 cursor-pointer text-base font-normal leading-[150%] tracking-[-0.32px]"
        >
          <Download />
          Download Invoice
        </Button>
      </div>
    </div>
  );
};

export default OrderOptionBar;
