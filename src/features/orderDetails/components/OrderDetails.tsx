import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { OrderDetailsItem } from "@/app/(dashboard)/order/view-order/[id]/page";

enum OrderDetailsHeader {
  OrderID = "Order ID",
  Item_Name = "Item Name",
  Quantity = "QTY",
  Amount = "Amount",
}

const OrderDetailsItemsHeader = Object.values(OrderDetailsHeader);

interface OrderDetailsProps {
  data?: Array<OrderDetailsItem>;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ data }) => {
  return (
    <div className="size-full border p-4 rounded-lg flex flex-col gap-4">
      <span className="px-2 text-xl font-bold leading-[150%] tracking-[-0.4px]">
        Order Details
      </span>
      <div className="w-full h-[230px] overflow-y-auto border-b p-2.5 pb-6">
        <Table>
          <TableHeader>
            <TableRow>
              {OrderDetailsItemsHeader.map((item, index) => {
                return (
                  <TableHead
                    className="text-gray-500 font-normal text-base leading-[150%] tracking-[-0.32px]"
                    key={index}
                  >
                    {item}
                  </TableHead>
                );
              })}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data &&
              data.length &&
              data.map((item, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell className="font-normal text-base leading-[150%] tracking-[-0.32px] py-2.5">
                      #{item.Order_ID}
                    </TableCell>
                    <TableCell className="font-normal text-base leading-[150%] tracking-[-0.32px] py-2.5">
                      {item.Item_Name}
                    </TableCell>
                    <TableCell className="font-normal text-base leading-[150%] tracking-[-0.32px] py-2.5">
                      {item.Quantity}
                    </TableCell>
                    <TableCell className="font-normal text-base leading-[150%] tracking-[-0.32px] py-2.5">
                      ${item.Amount}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </div>
      <div className="size-full flex flex-col items-end gap-4 ">
        <div className="size-full pb-4 border-b flex flex-col items-end">
          <div className="flex gap-4">
            <span className="font-normal text-base leading-[150%] tracking-[-0.32px]">
              Subtotal
            </span>
            <span className="font-normal text-base leading-[150%] tracking-[-0.32px]">
              {data && data.length
                ? `$${data.reduce(
                    (prev, current) => prev + current.Amount,
                    0
                  )} `
                : "-"}
            </span>
          </div>
          <div className="flex gap-4">
            <span className="font-normal text-base leading-[150%] tracking-[-0.32px]">
              Delivery Charge
            </span>
            <span className="font-normal text-base leading-[150%] tracking-[-0.32px] text-primary-500">
              Free
            </span>
          </div>
        </div>

        <div className="flex gap-4">
          <span className="text-xl font-bold leading-[150%] tracking-[-0.4px]">
            Grand Total
          </span>
          <span className="text-xl font-bold leading-[150%] tracking-[-0.4px]">
            {data && data.length
              ? `$${data.reduce((prev, current) => prev + current.Amount, 0)} `
              : "-"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
