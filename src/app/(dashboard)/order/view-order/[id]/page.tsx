"use client";
import OrderOptionBar from "@/features/optionsBar/components/OrderOptionBar";
import { Status } from "@/features/orderTable/orderData";
import { useParams } from "next/navigation";
import React from "react";

const ViewOrder = () => {
  const { id } = useParams();
  console.log("🚀 ~ ViewOrder ~ path:", id);

  return (
    <div>
      <div className="h-12">
        <OrderOptionBar id={id} status={Status.Completed} />
      </div>
    </div>
  );
};

export default ViewOrder;
