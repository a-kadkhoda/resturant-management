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
import { Checkbox } from "@/components/ui/checkbox";
import { EmployeeTableData } from "../employeeData";
import TablePagination from "@/features/shared/components/TablePagination";
import usePagination from "@/features/shared/hooks/usePagination";
import { useObserverResize } from "@/features/shared/hooks/useObserverResize";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Edit, Eye, Trash } from "lucide-react";

enum ColorEmployeeStatus {
  Active = "#22C55E",
  Inactive = "#EF4444",
}

enum EmployeeTableHeaderItems {
  EmployeeID = "EmployeeID",
  Employee_Name = "Employee Name",
  Email_Address = "Email Address",
  Phone_Number = "Phone Number",
  Status = "Status",
  Action = "Action",
}

const employeeTableHeaderItems = Object.values(EmployeeTableHeaderItems);
interface EmployeeTableProps {
  data: Array<EmployeeTableData>;
  onDelete: (id: string) => void;
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ data, onDelete }) => {
  const router = useRouter();
  const { height, ref } = useObserverResize<HTMLDivElement>();

  const {
    currentData,
    goToPage,
    nextPage,
    prevPage,
    perPage,
    totalPages,
    setPerPage,
    pageNumber,
  } = usePagination<EmployeeTableData>(data);
  useEffect(() => {
    const tableCount = Math.floor((height - 39) / 52);

    if (tableCount > 0 && perPage !== tableCount) {
      setPerPage(tableCount);
    }
  }, [height, perPage, setPerPage]);

  return (
    <div className=" size-full border rounded-lg pt-4 py-2  px-4  flex flex-col gap-1 justify-between">
      <div className="h-full" ref={ref}>
        <Table className=" table-auto w-full h-full ">
          <TableHeader>
            <TableRow>
              <TableHead className="w-max">
                <Checkbox />
              </TableHead>
              {employeeTableHeaderItems.map((item, index) => {
                return (
                  <TableHead
                    className="text-base font-normal  leading-[150%] tracking-[-0.32px] text-gray-500"
                    key={index}
                  >
                    {item}
                  </TableHead>
                );
              })}
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableCell className="w-max">
                    <Checkbox />
                  </TableCell>
                  <TableCell className="text-base font-normal leading-[150%] tracking-[-0.32px]">
                    #{item.EmployeeID}
                  </TableCell>
                  <TableCell className="text-base font-normal leading-[150%] tracking-[-0.32px]">
                    {item.EmployeeName}
                  </TableCell>
                  <TableCell className="text-base font-normal leading-[150%] tracking-[-0.32px]">
                    {item.EmailAddress}
                  </TableCell>
                  <TableCell className="text-base font-normal leading-[150%] tracking-[-0.32px]">
                    {item.PhoneNumber}
                  </TableCell>
                  <TableCell className="text-base font-normal leading-[150%] tracking-[-0.32px]">
                    <span
                      style={{
                        backgroundColor: `${
                          ColorEmployeeStatus[item.Status] + "50"
                        }`,

                        color: `${ColorEmployeeStatus[item.Status]}`,
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
                      onClick={() => {
                        router.push(
                          `employee/view-employee/${item.EmployeeID}`
                        );
                      }}
                    >
                      <Eye />
                    </Button>
                    <Button
                      type="button"
                      className="bg-transparent text-dark-500 dark:text-white hover:bg-transparent border cursor-pointer"
                      onClick={() => {
                        router.push(
                          `employee/view-employee/${item.EmployeeID}`
                        );
                      }}
                    >
                      <Edit />
                    </Button>
                    <Button
                      type="button"
                      className="bg-transparent text-dark-500 dark:text-white hover:bg-transparent border cursor-pointer"
                      onClick={() => onDelete(item.EmployeeID)}
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
      <div className="w-full size-[44px]">
        <TablePagination
          onNext={nextPage}
          onPrev={prevPage}
          totalPages={totalPages}
          onToPage={goToPage}
          pageNumber={pageNumber}
          perPage={perPage}
          totalRecords={data.length}
        />
      </div>
    </div>
  );
};

export default EmployeeTable;
