import OrderOptionBar from "@/features/optionsBar/components/OrderOptionBar";
import { Status } from "@/features/orderTable/orderData";
import React from "react";

const ViewOrder = () => {
  return (
    <div>
      <div className="h-12">
        <OrderOptionBar id="81902938" status={Status.Completed} />
      </div>
    </div>
  );
};

export default ViewOrder;
