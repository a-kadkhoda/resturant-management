"use client";
import Image from "next/image";
import React from "react";
import { Status } from "./EmployeeAttendence";

enum Color {
  On_Time = "#16a34a",
  Late = "#ca8a04",
  Left_Early = "#F97316",
  Overtime = "#4f46e5",
  Absent = "#dc2626",
}

interface EmployeeAttendenceCardProps {
  image: string;
  name: string;
  status: Status;
}

const EmployeeAttendenceCard: React.FC<EmployeeAttendenceCardProps> = ({
  image,
  name,
  status,
}) => {
  return (
    <div className="size-full flex justify-between pb-3">
      <div className="flex items-center gap-2">
        <Image
          src={image}
          height={512}
          width={512}
          alt={name}
          className="size-9 rounded-full"
        />
        <span className="text-base font-normal leading-[150%] tracking-[-0.32px]">
          {name}
        </span>
      </div>
      <div
        style={{
          backgroundColor: `${Color[status]}`,
        }}
        className={`w-max px-2 py-1.5 rounded-md text-white text-sm font-normal leading-[130%] tracking-[-0.24px] flex justify-center items-center`}
      >
        {status}
      </div>
    </div>
  );
};

export default EmployeeAttendenceCard;
