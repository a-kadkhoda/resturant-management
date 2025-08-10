"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OptionsBar from "@/features/optionsBar/components/OptionsBar";
import OrderTable from "@/features/orderTable/components/OrderTable";
import { tableBodyData, TableBodyData } from "@/features/orderTable/orderData";
import { useState } from "react";

const Order = () => {
  const [tableData, setTableData] = useState<TableBodyData[]>(tableBodyData);

  return (
    <div className="h-[calc(100vh-128px)] flex flex-1 flex-col gap-6">
      <div className="h-12">
        <OptionsBar />
      </div>
      <Tabs
        defaultValue="New Order"
        className="size-full bg-transparent flex flex-col gap-6"
      >
        <TabsList className="bg-transparent">
          <TabsTrigger
            className="!bg-transparent border-b-2  rounded-none p-5 data-[state=active]:!text-primary-500 data-[state=active]:!border-b-primary-500 cursor-pointer"
            value="New Order"
          >
            New Order
          </TabsTrigger>
          <TabsTrigger
            className="!bg-transparent border-b-2 rounded-none p-5 data-[state=active]:!text-primary-500 data-[state=active]:!border-b-primary-500 cursor-pointer"
            value="In Process"
          >
            In Process
          </TabsTrigger>
          <TabsTrigger
            className="!bg-transparent border-b-2 rounded-none p-5 data-[state=active]:!text-primary-500 data-[state=active]:!border-b-primary-500 cursor-pointer"
            value="Completed"
          >
            Completed
          </TabsTrigger>
          <TabsTrigger
            className="!bg-transparent border-b-2 rounded-none p-5 data-[state=active]:!text-primary-500 data-[state=active]:!border-b-primary-500 cursor-pointer"
            value="Cancelled"
          >
            Cancelled
          </TabsTrigger>
        </TabsList>
        <TabsContent value="New Order" className="size-full">
          <OrderTable
            data={tableData}
            onDelete={(id) => {
              const filterdItems = tableData.filter(
                (item) => item.Order_ID !== id
              );

              setTableData(filterdItems);
            }}
            matchStatus={[null]}
          />
        </TabsContent>
        <TabsContent value="In Process" className="size-full">
          <OrderTable
            data={tableData}
            onDelete={(id) => {
              const filterdItems = tableData.filter(
                (item) => item.Order_ID !== id
              );

              setTableData(filterdItems);
            }}
            matchStatus={["Inprocess"]}
          />
        </TabsContent>
        <TabsContent value="Completed" className="size-full">
          <OrderTable
            data={tableData}
            onDelete={(id) => {
              const filterdItems = tableData.filter(
                (item) => item.Order_ID !== id
              );

              setTableData(filterdItems);
            }}
            matchStatus={["Completed"]}
          />
        </TabsContent>
        <TabsContent value="Cancelled" className="size-full">
          <OrderTable
            data={tableData}
            onDelete={(id) => {
              const filterdItems = tableData.filter(
                (item) => item.Order_ID !== id
              );

              setTableData(filterdItems);
            }}
            matchStatus={["Cancelled"]}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Order;
