"use client";
import InfoCard from "@/features/infoCard/components/InfoCard";
import OrderTable from "@/features/orderTable/components/OrderTable";
import { tableBodyData, TableBodyData } from "@/features/orderTable/orderData";
import OrderStatisticsEmployeeAttendence from "@/features/shared/components/OrderStatisticsEmployeeAttendence";
import { BadgeDollarSign, CookingPot, File, Users } from "lucide-react";
import React, { useState } from "react";

enum InfoItems {
  Total_Revenue = "Total Revenue",
  Total_Order = "Total Order",
  Total_Employee = "Total Employee",
  Total_Menu = "Total Menu",
}

interface Items {
  icon: React.ReactNode;
  title: InfoItems;
  value: string;
  updated: string;
}

const infoItems: Items[] = [
  {
    icon: <BadgeDollarSign size={20} className="text-white" />,
    title: InfoItems.Total_Revenue,
    value: `$${"15,800,976"}`,
    updated: `April 01,2024`,
  },
  {
    icon: <File size={20} className="text-white" />,
    title: InfoItems.Total_Order,
    value: `11,270`,
    updated: `April 01,2024`,
  },
  {
    icon: <Users size={20} className="text-white" />,
    title: InfoItems.Total_Employee,
    value: `479`,
    updated: `April 01,2024`,
  },
  {
    icon: <CookingPot size={20} className="text-white" />,
    title: InfoItems.Total_Menu,
    value: `110`,
    updated: `April 01,2024`,
  },
];

const Dashboard = () => {
  const [tableData, setTableData] = useState<TableBodyData[]>(tableBodyData);
  return (
    <div className="size-full flex flex-col gap-4">
      <div className="flex gap-4">
        {infoItems.map((item, index) => {
          return (
            <InfoCard
              key={index}
              icon={item.icon}
              timeUpdate={item.updated}
              title={item.title}
              value={item.value}
            />
          );
        })}
      </div>
      <div className="size-full">
        <OrderStatisticsEmployeeAttendence />
      </div>
      <div className="w-full h-[542px] overflow-y-auto">
        <OrderTable
          data={tableData}
          onDelete={(id) => {
            const filterdItems = tableData.filter(
              (item) => item.Order_ID !== id
            );

            setTableData(filterdItems);
          }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
