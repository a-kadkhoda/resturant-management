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
import { Download } from "lucide-react";
import { orderStatus } from "@/features/orderTable/orderData";
import { ColorOrderStatus } from "@/features/orderTable/components/OrderTable";
import { ParamValue } from "next/dist/server/request/params";

const StatusItems = Object.values(orderStatus);

interface OrderOptionBar {
  status?: orderStatus;
  id?: ParamValue;
}

const OrderOptionBar: React.FC<OrderOptionBar> = ({
  id,
  status = "New Order",
}) => {
  const [statusSelected, setStatusSelected] = useState<string>(status);

  return (
    <div className="size-full flex justify-between items-center ">
      {id ? (
        <span className="text-2xl pl-2 font-bold leading-[132%] tracking-[-0.48px]">
          #{id}
        </span>
      ) : (
        <span className="text-2xl pl-2 font-bold leading-[132%] tracking-[-0.48px]">
          New Order
        </span>
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
