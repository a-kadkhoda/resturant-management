import CustomerDetails from "@/features/customerDetails/components/CustomerDetails";
import OrderOptionBar from "@/features/optionsBar/components/OrderOptionBar";
import OrderDetails from "@/features/orderDetails/components/OrderDetails";
import React from "react";

const AddNewOrder = () => {
  return (
    <div className="h-[calc(100vh-128px)] flex flex-1 flex-col gap-6">
      <div className="h-12">
        <OrderOptionBar />
      </div>
      <div className="size-full flex gap-4">
        <div className="w-2/3 h-max">
          <OrderDetails />
        </div>
        <div className="w-1/3 h-max ">
          <CustomerDetails />
        </div>
      </div>
    </div>
  );
};

export default AddNewOrder;
