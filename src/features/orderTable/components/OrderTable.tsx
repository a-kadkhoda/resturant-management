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
import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";
import { Eye, Trash } from "lucide-react";
import { tableBodyData, TableBodyData } from "../orderData";

enum ColorStatus {
  Completed = "#22C55E",
  Inprocess = "#EAB308",
  Pending = "#3B82F6",
  Cancelled = "#EF4444",
}
enum TableHeaderOrder {
  Order_ID = "Order ID",
  Customer_Name = "Customer Name",
  Date = "Date",
  Amount = "Amount",
  Payment_Type = "Payment Type",
  Status = "Status",
  Action = "Action",
}

const tableHeaderOrder = Object.values(TableHeaderOrder);

const OrderTable = () => {
  const [tableData, setTableData] = useState<TableBodyData[]>(tableBodyData);

  const handleDelete = (id: string) => {
    const filterdItems = tableData.filter((item) => item.Order_ID !== id);

    setTableData(filterdItems);
  };

  return (
    <div className=" size-full border rounded-lg pt-4   flex flex-col gap-4">
      <div className="flex justify-between items-center w-full px-2 pr-6 ">
        <span className="text-xl font-bold leading-[150%] tracking-[-0.4px]">
          Order
        </span>
        <Toggle
          variant="outline"
          className="cursor-pointer text-sm font-normal leading-[140%] tracking-[-0.28px]"
        >
          See All
        </Toggle>
      </div>
      <Table className=" table-auto w-full h-full ">
        <TableHeader>
          <TableRow>
            {tableHeaderOrder.map((item, index) => {
              return (
                <TableHead
                  key={index}
                  className="text-base font-normal leading-[150%] tracking-[-0.32px] text-gray-500"
                >
                  {item}
                </TableHead>
              );
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData
            .filter((item) => item.Status !== null)
            .slice(0, 8)
            .map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableCell className="text-base font-normal leading-[150%] tracking-[-0.32px]">
                    {item.Order_ID}
                  </TableCell>
                  <TableCell className="text-base font-normal leading-[150%] tracking-[-0.32px]">
                    {item.Customer_Name}
                  </TableCell>
                  <TableCell className="text-base font-normal leading-[150%] tracking-[-0.32px]">
                    {item.Date}
                  </TableCell>
                  <TableCell className="text-base font-normal leading-[150%] tracking-[-0.32px]">
                    {item.Amount}
                  </TableCell>
                  <TableCell className="text-base font-normal leading-[150%] tracking-[-0.32px]">
                    {item.Payment_Type}
                  </TableCell>
                  <TableCell>
                    <span
                      style={{
                        backgroundColor: item.Status
                          ? ` ${ColorStatus[item.Status] + "50"}`
                          : "transparent",
                        color: item.Status
                          ? ` ${ColorStatus[item.Status]}`
                          : "#fff",
                      }}
                      className="w-max px-2 py-1.5 rounded-sm "
                    >
                      {item.Status}
                    </span>
                  </TableCell>
                  <TableCell className="flex gap-2">
                    <Button
                      type="button"
                      className="bg-transparent text-dark-500 dark:text-white hover:bg-transparent border cursor-pointer"
                    >
                      <Eye />
                    </Button>
                    <Button
                      type="button"
                      className="bg-transparent text-dark-500 dark:text-white hover:bg-transparent border cursor-pointer"
                      onClick={() => handleDelete(item.Order_ID)}
                    >
                      <Trash />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
};

export default OrderTable;
