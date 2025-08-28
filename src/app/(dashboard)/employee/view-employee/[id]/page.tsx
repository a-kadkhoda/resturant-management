"use client";
import EmployeeDetails from "@/features/employeeDetails/components/EmployeeDetails";
import { EmployeeStatus } from "@/features/employeeTable/employeeData";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";
export interface EmployeeInfo {
  fullName: string;
  emailName: string;
  phoneNumber: string;
  status: EmployeeStatus;
  // image:string
}

const employeeInfo: EmployeeInfo = {
  fullName: "Leslie Alexander",
  emailName: "leslie.a@demo.com",
  phoneNumber: "(405) 555-0128",
  status: EmployeeStatus.Active,
};

const ViewEmployee = () => {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");

  return (
    <div className="w-full h-max ">
      <EmployeeDetails id={id} mode={mode} data={employeeInfo} />
    </div>
  );
};

export default ViewEmployee;
