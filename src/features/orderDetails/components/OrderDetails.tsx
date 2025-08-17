"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { OrderDetailsItem } from "@/app/(dashboard)/order/view-order/[id]/page";

enum OrderDetailsHeader {
  OrderID = "Order ID",
  Item_Name = "Item Name",
  Quantity = "QTY",
  Amount = "Amount",
}
import { Check, ChevronsUpDown, PlusIcon } from "lucide-react";
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
import { Button } from "@/components/ui/button";

const OrderDetailsItemsHeader = Object.values(OrderDetailsHeader);

interface OrderDetailsProps {
  data?: Array<OrderDetailsItem>;
  mode?: string | null;
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

const OrderDetails: React.FC<OrderDetailsProps> = ({ data, mode }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className="size-full border p-4 rounded-lg flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <span className="px-2 text-xl font-bold leading-[150%] tracking-[-0.4px]">
          Order Details
        </span>
        {mode !== "view" && (
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
      </div>
      <div className="w-full h-[230px] overflow-y-auto border-b p-2.5 pb-6">
        <Table>
          <TableHeader>
            <TableRow>
              {OrderDetailsItemsHeader.map((item, index) => {
                return (
                  <TableHead
                    className="text-gray-500 font-normal text-base leading-[150%] tracking-[-0.32px]"
                    key={index}
                  >
                    {item}
                  </TableHead>
                );
              })}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data &&
              data.length &&
              data.map((item, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell className="font-normal text-base leading-[150%] tracking-[-0.32px] py-2.5">
                      #{item.Order_ID}
                    </TableCell>
                    <TableCell className="font-normal text-base leading-[150%] tracking-[-0.32px] py-2.5">
                      {item.Item_Name}
                    </TableCell>
                    <TableCell className="font-normal text-base leading-[150%] tracking-[-0.32px] py-2.5">
                      {item.Quantity}
                    </TableCell>
                    <TableCell className="font-normal text-base leading-[150%] tracking-[-0.32px] py-2.5">
                      ${item.Amount}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </div>
      <div className="size-full flex flex-col items-end gap-4 ">
        <div className="size-full pb-4 border-b flex flex-col items-end">
          <div className="flex gap-4">
            <span className="font-normal text-base leading-[150%] tracking-[-0.32px]">
              Subtotal
            </span>
            <span className="font-normal text-base leading-[150%] tracking-[-0.32px]">
              {data && data.length
                ? `$${data.reduce(
                    (prev, current) => prev + current.Amount,
                    0
                  )} `
                : "-"}
            </span>
          </div>
          <div className="flex gap-4">
            <span className="font-normal text-base leading-[150%] tracking-[-0.32px]">
              Delivery Charge
            </span>
            <span className="font-normal text-base leading-[150%] tracking-[-0.32px] text-primary-500">
              Free
            </span>
          </div>
        </div>

        <div className="flex gap-4">
          <span className="text-xl font-bold leading-[150%] tracking-[-0.4px]">
            Grand Total
          </span>
          <span className="text-xl font-bold leading-[150%] tracking-[-0.4px]">
            {data && data.length
              ? `$${data.reduce((prev, current) => prev + current.Amount, 0)} `
              : "-"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
