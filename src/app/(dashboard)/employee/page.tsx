"use client";
import EmployeeTable from "@/features/employeeTable/components/EmployeeTable";
import {
  employeeData,
  EmployeeTableData,
} from "@/features/employeeTable/employeeData";
import OptionBar from "@/features/optionsBar/components/OptionBar";
import React, { useState } from "react";

const Employee = () => {
  const [tableData, setTableData] =
    useState<Array<EmployeeTableData>>(employeeData);
  return (
    <div className="h-[calc(100vh-128px)] flex flex-1 flex-col gap-6">
      <div className="h-12">
        <OptionBar />
      </div>
      <div className="size-full">
        <EmployeeTable
          data={tableData}
          onDelete={(id) => {
            const filterdItems = tableData.filter(
              (item) => item.EmployeeID !== id
            );

            setTableData(filterdItems);
          }}
        />
      </div>
    </div>
  );
};

export default Employee;
