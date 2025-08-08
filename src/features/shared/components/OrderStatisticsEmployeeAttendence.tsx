"use client";

import EmployeeAttendence from "@/features/employeeAttendence/components/EmployeeAttendence";
import OrderStatistics from "@/features/orderStatistics/components/OrderStatistics";
import React from "react";
import { useHeightResponsive } from "../hooks/useHeightResponsive";

const OrderStatisticsEmployeeAttendence = () => {
  const { ref, height } = useHeightResponsive<HTMLDivElement>();

  return (
    <div className="flex size-full gap-4">
      <div className="size-full " ref={ref}>
        <OrderStatistics />
      </div>
      <div
        style={{ height: height }}
        className="w-[840px] transition-all duration-200 ease-linear"
      >
        <EmployeeAttendence />
      </div>
    </div>
  );
};

export default OrderStatisticsEmployeeAttendence;
