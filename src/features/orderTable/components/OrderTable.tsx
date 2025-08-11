"use client";
import React, { useEffect } from "react";
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
import { TableBodyData } from "../orderData";
import { usePathname, useRouter } from "next/navigation";
import TablePagination from "./TablePagination";
import usePagination from "../hooks/usePagination";

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

interface OrederTableProps {
  data: Array<TableBodyData>;
  onDelete: (id: string) => void;
  matchStatus?: (string | null)[];
  count?: number;
}

const OrderTable: React.FC<OrederTableProps> = ({
  data,
  onDelete,
  matchStatus = ["Completed", "Inprocess"],
  count = 8,
}) => {
  const router = useRouter();
  const path = usePathname();
  const isDashboard =
    path
      .split("/")
      .filter((item) => item)[0]
      .toLowerCase() === "dashboard";

  const filteredData = () => {
    return data.filter((item) => matchStatus.includes(item.Status));
  };

  const {
    currentData,
    goToPage,
    nextPage,
    perPage,
    prevPage,
    totalPages,
    setPerPage,
    pageNumber,
  } = usePagination<TableBodyData>(filteredData());
  useEffect(() => {
    setPerPage(count);
  }, [count, setPerPage]);

  return (
    <div className=" min-h-full border rounded-lg pt-4 py-2  px-4  flex flex-col gap-1 justify-between">
      <div className="size-full flex flex-col">
        {isDashboard && (
          <div className="flex justify-between items-center w-full  px-2 pr-6 ">
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
        )}

        <Table className=" table-auto w-full h-full ">
          <TableHeader>
            <TableRow>
              {tableHeaderOrder.map((item, index) => {
                return (
                  <TableHead
                    key={index}
                    className="text-base font-normal  leading-[150%] tracking-[-0.32px] text-gray-500"
                  >
                    {item}
                  </TableHead>
                );
              })}
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.slice(0, perPage).map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableCell className="text-base font-normal leading-[150%] tracking-[-0.32px]">
                    #{item.Order_ID}
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
                  {item.Status == null ? (
                    <TableCell>
                      <Button
                        type="button"
                        className="bg-error-500 cursor-pointer hover:bg-error-600  rounded-md py-2 px-3 text-white text-xs leading-[130%] tracking-[-0.24px] font-normal mr-3 "
                      >
                        Reject
                      </Button>
                      <Button
                        type="button"
                        className="bg-success-500 cursor-pointer hover:bg-success-600  rounded-md py-2 px-3 text-white text-xs leading-[130%] tracking-[-0.24px] font-normal "
                      >
                        Accetpt
                      </Button>
                    </TableCell>
                  ) : (
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
                  )}

                  <TableCell className="flex gap-2">
                    <Button
                      type="button"
                      className="bg-transparent text-dark-500 dark:text-white hover:bg-transparent border cursor-pointer"
                      onClick={() => {
                        console.log(item.Order_ID);
                        router.push(`order/view-order/${item.Order_ID}`);
                      }}
                    >
                      <Eye />
                    </Button>
                    <Button
                      type="button"
                      className="bg-transparent text-dark-500 dark:text-white hover:bg-transparent border cursor-pointer"
                      onClick={() => onDelete(item.Order_ID)}
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
      {!isDashboard && (
        <div className="w-full size-[44px]">
          <TablePagination
            onNext={nextPage}
            onPrev={prevPage}
            totalPages={totalPages}
            onToPage={goToPage}
            pageNumber={pageNumber}
          />
        </div>
      )}
    </div>
  );
};

export default OrderTable;
