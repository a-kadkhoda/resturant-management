"use client";
import CustomerDetails from "@/features/customerDetails/components/CustomerDetails";
import OrderOptionBar from "@/features/optionsBar/components/OrderOptionBar";
import OrderDetails from "@/features/orderDetails/components/OrderDetails";
import { Status } from "@/features/orderTable/orderData";
import { useParams } from "next/navigation";
import React from "react";

export interface OrderDetailsItem {
  Order_ID: string;
  Item_Name: string;
  Quantity: number;
  Amount: number;
}
export interface CustomerDetailsItem {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  peymentType?: string;
}

const ViewOrder = () => {
  const { id } = useParams();

  const OrderDetailsItems: Array<OrderDetailsItem> = [
    {
      Order_ID: "41243275",
      Item_Name: "San Francisco sourdough bread",
      Quantity: 1,
      Amount: 80,
    },
    {
      Order_ID: "41243275",
      Item_Name: "Cobb salad",
      Quantity: 1,
      Amount: 40,
    },
    {
      Order_ID: "41243275",
      Item_Name: "Biscuits ‘n’ gravy",
      Quantity: 1,
      Amount: 100,
    },
  ];

  const customerDetailsItem: CustomerDetailsItem = {
    name: "Nicole Shaffer",
    email: "Nicole.Shaffer@demo.com",
    phone: "(480) 555-0103",
    address: "4140 Parker Rd. Allentown, New Mexico 31134",
    peymentType: "Credit Card",
  };

  return (
    <div className="h-[calc(100vh-128px)] flex flex-1 flex-col gap-6">
      <div className="h-12">
        <OrderOptionBar id={id} status={Status.Completed} />
      </div>
      <div className="size-full flex gap-4">
        <div className="w-2/3 h-max">
          <OrderDetails data={OrderDetailsItems} />
        </div>
        <div className="w-1/3 h-max ">
          <CustomerDetails {...customerDetailsItem} id={id} />
        </div>
      </div>
    </div>
  );
};

export default ViewOrder;
