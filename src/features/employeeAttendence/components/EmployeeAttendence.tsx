"use client";
import React from "react";
import EmployeeAttendenceCard from "./EmployeeAttendenceCard";

export type AttendenceStatus =
  | "On_Time"
  | "Late"
  | "Left_Early"
  | "Overtime"
  | "Absent";

interface Item {
  image: string;
  name: string;
  status: AttendenceStatus;
}

const ListItem: Item[] = [
  {
    name: "Dianne Russell",
    image: "/profile.png",
    status: "On_Time",
  },
  {
    name: "Guy Hawkins",
    image: "/profile.png",
    status: "On_Time",
  },
  {
    name: "Savannah Nguyen",
    image: "/profile.png",
    status: "On_Time",
  },
  {
    name: "Darrell Steward",
    image: "/profile.png",
    status: "Late",
  },
  {
    name: "Jerome Bell",
    image: "/profile.png",
    status: "Late",
  },
  {
    name: "Bessie Cooper",
    image: "/profile.png",
    status: "On_Time",
  },
  {
    name: "Leslie Alexander",
    image: "/profile.png",
    status: "On_Time",
  },
  {
    name: "Dianne Russell",
    image: "/profile.png",
    status: "Absent",
  },
  {
    name: "Guy Hawkins",
    image: "/profile.png",
    status: "Absent",
  },
  {
    name: "Savannah Nguyen",
    image: "/profile.png",
    status: "Left_Early",
  },
  {
    name: "Darrell Steward",
    image: "/profile.png",
    status: "Left_Early",
  },
  {
    name: "Jerome Bell",
    image: "/profile.png",
    status: "Late",
  },
  {
    name: "Bessie Cooper",
    image: "/profile.png",
    status: "Overtime",
  },
  {
    name: "Leslie Alexander",
    image: "/profile.png",
    status: "On_Time",
  },
  {
    name: "Jerome Bell",
    image: "/profile.png",
    status: "Late",
  },
  {
    name: "Bessie Cooper",
    image: "/profile.png",
    status: "Overtime",
  },
  {
    name: "Leslie Alexander",
    image: "/profile.png",
    status: "On_Time",
  },
  {
    name: "Jerome Bell",
    image: "/profile.png",
    status: "Late",
  },
  {
    name: "Bessie Cooper",
    image: "/profile.png",
    status: "Overtime",
  },
  {
    name: "Leslie Alexander",
    image: "/profile.png",
    status: "On_Time",
  },
  {
    name: "Jerome Bell",
    image: "/profile.png",
    status: "Late",
  },
  {
    name: "Bessie Cooper",
    image: "/profile.png",
    status: "Overtime",
  },
  {
    name: "Leslie Alexander",
    image: "/profile.png",
    status: "On_Time",
  },
];

const EmployeeAttendence = () => {
  return (
    <div className="size-full flex flex-col gap-4 p-4  border rounded-lg ">
      <span className="text-xl font-bold leading-[150%] tracking-[-0.4px]">
        Employee Attendence
      </span>
      <div className="flex flex-col gap-4 size-full  divide-y  overflow-y-auto pr-4">
        {ListItem.map((item, index) => {
          return (
            <EmployeeAttendenceCard
              key={index}
              image={item.image}
              name={item.name}
              status={item.status}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EmployeeAttendence;
